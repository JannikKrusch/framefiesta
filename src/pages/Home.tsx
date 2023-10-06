import { useEffect, useState } from "react";
import { BlogPost } from "../utils";
import { Loader } from "../components/shared";
import { DummyBlogPosts } from "../utils/helper/DummyData";

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
      <div style={{ color: "white" }}>
        {/* <Loader /> */}
        <span style={{ color: "white" }}>{searchQuery}</span>
        {filteredBlogPosts.map((post) => {
          return (
            <>
              <p>{post.id}</p>
              <p>{post.motionPicture.title}</p>
              <p>{post.motionPicture.rating}</p>
              <p>{post.motionPicture.initialRelease}</p>
              <p>{post.motionPicture.director}</p>
              <p>
                {post.motionPicture.actors.map((actor) => {
                  return (
                    <>
                      <span>actor: {actor} | </span>
                    </>
                  );
                })}
              </p>
              <p>
                {post.motionPicture.genre.map((genre) => {
                  return (
                    <>
                      <span>genre: {genre} | </span>
                    </>
                  );
                })}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
