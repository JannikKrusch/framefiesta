import { useContext, useEffect, useState } from "react";
import { BlogPost, Controllers } from "../utils";
import { Loader } from "../components/shared";
import { DummyBlogPosts } from "../utils/helper/DummyData";
import "./Home.css";
import DetailPost from "../components/modules/home/detailPost/DetailPost";
import { DataContext } from "../utils/context/DataContext";
import { StateContext } from "../utils/context/StateContext";
interface HomeProps {
  searchQuery: string;
}

function Home({ searchQuery }: HomeProps) {
  const { blogPosts, setBlogPosts } = useContext(DataContext);
  const { setLoading, loading } = useContext(StateContext);

  useEffect(() => {
    setBlogPosts(DummyBlogPosts(10));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => false);
    }, 1000);

    return () => clearInterval(interval);
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
