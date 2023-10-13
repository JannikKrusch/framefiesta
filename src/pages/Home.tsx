import { useEffect, useState } from "react";
import { BlogPost } from "../utils";
import { Loader } from "../components/shared";
import { DummyBlogPosts } from "../utils/helper/DummyData";
import "./Home.css";
interface HomeProps {
  searchQuery: string;
}

function Home({ searchQuery }: HomeProps) {
  const [blogPosts, setblogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setblogPosts(DummyBlogPosts(10));
  }, []);

  const filteredBlogPosts = filterBlogPosts(blogPosts);

  function filterBlogPosts(blogposts: BlogPost[]): BlogPost[] {
    console.warn(searchQuery);
    const searchQueryLowerCase = searchQuery.toLowerCase();
    return blogposts.filter((post: BlogPost) => {
      const motionPicture = post.motionPicture;
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
        motionPicture.genre.some((genre: String) =>
          genre.toLowerCase().includes(searchQueryLowerCase)
        )
      );
    });
  }

  return (
    <>
      <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>

      {/* <div className="spacer-top layer1"></div>
      <div className="spacer-bottom layer1"></div> */}

      <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>
      <div className="spacer layer1"></div>
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
      </section>
      <section>
        <h1>Nice Curves</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam
        </p>
      </section>
    </>
  );
}

export default Home;
