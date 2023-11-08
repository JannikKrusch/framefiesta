import { useContext, useEffect } from "react";
import { Loader } from "../../components/shared";
import { DummyBlogPosts } from "../../utils/helper/DummyData";
import DetailPost from "../../components/modules/home/detailPost/DetailPost";
import { DataContext } from "../../utils/context/DataContext";
import { StateContext } from "../../utils/context/StateContext";

function Home() {
  const { setBlogPosts, selectedBlogPostId, setSelectedBlogPostId, setUser } =
    useContext(DataContext);
  const { setLoading, loading } = useContext(StateContext);

  useEffect(() => {
    setLoading((prev) => true);
    const dummyPosts = DummyBlogPosts(10);
    if (selectedBlogPostId === "") {
      setSelectedBlogPostId(dummyPosts[0].id);
    }
    if (dummyPosts.length > 0) {
      setLoading((prev) => false);
    }
    setBlogPosts(dummyPosts);
  }, []);

  return <>{loading ? <Loader /> : <DetailPost />}</>;
}

export default Home;
