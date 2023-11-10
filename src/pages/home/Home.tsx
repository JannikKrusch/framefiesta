import { useContext, useEffect } from "react";
import { Loader } from "../../components/shared";
import { DummyBlogPosts } from "../../utils/helper/DummyData";
import DetailPost from "../../components/modules/home/detailPost/DetailPost";
import { DataContext, ServiceContext, StateContext, User } from "../../utils";

function Home() {
  const { setBlogPosts, selectedBlogPostId, setSelectedBlogPostId, setUser } =
    useContext(DataContext);
  const { setLoading, loading } = useContext(StateContext);
  const { sessionStorageService } = useContext(ServiceContext);

  useEffect(() => {
    setLoading((prev) => true);
    const dummyPosts = DummyBlogPosts(10);
    if (selectedBlogPostId === "") {
      setSelectedBlogPostId(dummyPosts[0].id);
    }
    if (dummyPosts.length > 0) {
      setLoading((prev) => false);
    }
    // const user = new User();
    // user.name = "Joe Mama der 3. von Among Us";
    // user.email = "jannik.test@gmail.com";
    // user.id = "1";
    // user.password = "jannik@test.password";
    // //setUser(user);
    const user = sessionStorageService?.getUser();
    if (user) {
      setUser((prev) => user);
    }
    setBlogPosts(dummyPosts);
  }, []);

  return <>{loading ? <Loader /> : <DetailPost />}</>;
}

export default Home;
