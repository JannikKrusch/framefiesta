import { useContext, useEffect, useState } from "react";
import { BlogPost, Controllers, User } from "../utils";
import { Loader } from "../components/shared";
import { DummyBlogPosts } from "../utils/helper/DummyData";
import "./Home.css";
import DetailPost from "../components/modules/home/detailPost/DetailPost";
import { DataContext } from "../utils/context/DataContext";
import { StateContext } from "../utils/context/StateContext";

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
    let user: User = new User();
    user.id = "0";
    user.isAdmin = true;
    user.name = "Jannik";
    setUser(user);
    setBlogPosts(dummyPosts);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <DetailPost />}
      {/* <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>

      <div className="spacer-top layer1"></div>
  <div className="spacer-bottom layer1"></div>*/}
    </>
  );
}

export default Home;
