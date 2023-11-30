import { useContext, useEffect } from "react";
import {
  DataContext,
  ServiceContext,
  StateContext,
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
    const tempBlogPosts = await blogPostService?.getBlogPostsAsync();
    if (tempBlogPosts === null || tempBlogPosts === undefined) {
      return;
    }

    if (selectedBlogPostId === "" && tempBlogPosts.length > 0) {
      setSelectedBlogPostId(tempBlogPosts[tempBlogPosts.length - 1].id);
      setBlogPosts((prev) => tempBlogPosts ?? prev);
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
    getBlogPostsAsync();
    getUserFromSessionStorage();

    return () => {
      // Abbruch aller laufenden Anfragen beim Unmount
      blogPostService?.abortAllRequests();
    };
  }, []);

  return <>{loading ? <Loader /> : <DetailPost blogPosts={blogPosts} />}</>;
}
