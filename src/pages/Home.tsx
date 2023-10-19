import { useEffect, useState } from "react";
import { BlogPost, Controllers } from "../utils";
import { Loader } from "../components/shared";
import { DummyBlogPosts } from "../utils/helper/DummyData";
import "./Home.css";
import DetailPost from "../components/modules/home/detailPost/DetailPost";
interface HomeProps {
  searchQuery: string;
}

function Home({ searchQuery }: HomeProps) {
  const [blogPosts, setblogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setblogPosts(DummyBlogPosts(10));
  }, []);

  return (
    <>
      {blogPosts.length > 0 ? <DetailPost blogPost={blogPosts[0]} /> : <></>}

      {/* <Welcome /> */}
      {/* <BlogPostTeaser blogPosts={blogPosts} /> */}
      {/* <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>

      <div className="spacer-top layer1"></div>
      <div className="spacer-bottom layer1"></div>

      <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>
      <div className="spacer layer1"></div> */}
      {/* <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>
      <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>
      <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>
      <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>
      <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>
      <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section> */}
    </>
  );
}

export default Home;
