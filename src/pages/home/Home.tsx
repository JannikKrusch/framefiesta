import { useContext, useEffect } from "react";
import { DummyBlogPosts } from "../../utils/helper/DummyData";
import {
  DataContext,
  ServiceContext,
  StateContext,
  useErrorUpdate,
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
  const { sessionStorageService } = useContext(ServiceContext);
  useErrorUpdate();

  useEffect(() => {
    setLoading((prev) => true);
    const dummyPosts = DummyBlogPosts(10);
    if (selectedBlogPostId === "") {
      setSelectedBlogPostId(dummyPosts[dummyPosts.length - 1].id);
    }
    if (dummyPosts.length > 0) {
      setLoading((prev) => false);
    }

    const userFE = sessionStorageService?.getUser();
    if (userFE) {
      setUser((prev) => userFE);
    }
    setBlogPosts(dummyPosts);
  }, []);

  return <>{loading ? <Loader /> : <DetailPost blogPosts={blogPosts} />}</>;
}
