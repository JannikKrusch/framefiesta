import { useContext, useEffect } from "react";
import { DummyBlogPosts } from "../../utils/helper/DummyData";
import {
  DataContext,
  ServiceContext,
  StateContext,
  UserFE,
  useErrorRedirect,
} from "../../utils";
import { DetailPost, Loader } from "../../components";

export function Home(): JSX.Element {
  const {
    blogPosts,
    setBlogPosts,
    selectedBlogPostId,
    setSelectedBlogPostId,
    setUser,
  } = useContext(DataContext);
  const { setLoading, loading } = useContext(StateContext);
  const { blogPostService, sessionStorageService } = useContext(ServiceContext);
  useErrorRedirect();

  async function getBlogPostsAsync(): Promise<void> {
    setLoading((prev) => true);
    const blogPosts = await blogPostService?.getBlogPostsAsync();
    if (blogPosts === null || blogPosts === undefined) {
      return;
    }

    if (selectedBlogPostId === "" && blogPosts.length > 0) {
      setSelectedBlogPostId(blogPosts[blogPosts.length - 1].id);
      setBlogPosts((prev) => blogPosts);
      setLoading((prev) => false);
    }
  }

  function getUserFromSessionStorage(): void {
    const userFE = sessionStorageService?.getUser();
    if (userFE) {
      setUser((prev) => userFE);
    }
  }

  useEffect(() => {
    if (blogPostService === undefined) {
      return;
    }
    const dummyPosts = DummyBlogPosts(20);
    if (selectedBlogPostId === "") {
      setSelectedBlogPostId(dummyPosts[dummyPosts.length - 1].id);
    }
    if (dummyPosts.length > 0) {
      setLoading((prev) => false);
    }
    setBlogPosts(dummyPosts);

    // const userFE = new UserFE();
    // userFE.id = "1";
    // userFE.name = "Joe Mama";
    // userFE.email = "joemama@gmail.com";
    // userFE.comments = [dummyPosts[0].comments[0]];
    // setUser(userFE);

    //!use this when backend is available
    // getBlogPostsAsync();
    //getUserFromSessionStorage();

    return () => {
      // Abbruch aller laufenden Anfragen beim Unmount
      blogPostService?.abortAllRequests();
    };
  }, []);

  return <>{loading ? <Loader /> : <DetailPost blogPosts={blogPosts} />}</>;
}
