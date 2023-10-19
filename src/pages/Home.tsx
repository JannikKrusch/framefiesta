import { useEffect, useState } from "react";
import { BlogPost, Controllers } from "../utils";
import { Loader } from "../components/shared";
import { DummyBlogPosts } from "../utils/helper/DummyData";
import "./Home.css";
import Welcome from "../components/modules/home/welcome/Welcome";
import BlogPostTeaser from "../components/modules/home/blogpostteaser/BlogPostTeaser";
interface HomeProps {
  searchQuery: string;
}

function Home({ searchQuery }: HomeProps) {
  const [blogPosts, setblogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setblogPosts(DummyBlogPosts(10));
  }, []);

  function filterBlogPosts(blogposts: BlogPost[]): BlogPost[] {
    console.warn(searchQuery);
    const searchQueryLowerCase = searchQuery.toLowerCase();
    return blogposts.filter((post: BlogPost) => {
      const motionPicture = post.relatedMotionPicture;
      return (
        motionPicture.director.toLowerCase().includes(searchQueryLowerCase) ||
        motionPicture.initialRelease
          .toString()
          .includes(searchQueryLowerCase) ||
        motionPicture.rating.toString().includes(searchQueryLowerCase) ||
        motionPicture.title.toLowerCase().includes(searchQueryLowerCase) ||
        motionPicture.actors.some((actor: string) =>
          actor.toLowerCase().includes(searchQueryLowerCase)
        ) ||
        motionPicture.genres.some((genre: String) =>
          genre.toLowerCase().includes(searchQueryLowerCase)
        )
      );
    });
  }

  return (
    <>
      <Welcome />
      <BlogPostTeaser blogPosts={blogPosts} />
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
