import { useState } from "react";
import { BlockPost } from "../utils";
import { Loader } from "../components/shared";

interface HomeProps {
  searchQuery: string;
}

function Home({ searchQuery }: HomeProps) {
  const [blogPosts, setblogPosts] = useState<BlockPost[]>([]);

  const filteredBlogPosts = filterBlogPosts(blogPosts);

  function filterBlogPosts(blogposts: BlockPost[]): BlockPost[] {
    console.warn(searchQuery);
    const searchQueryLowerCase = searchQuery.toLowerCase();
    return blogposts.filter((post: BlockPost) => {
      const motionPicture = post.motionPicture;
      return (
        motionPicture.director.toLowerCase().includes(searchQueryLowerCase) ||
        motionPicture.initialRelease.includes(searchQueryLowerCase) ||
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
      {/* <Loader /> */}
      <span style={{ color: "white" }}>{searchQuery}</span>
      {/* Hier sollen später Elemente aufgelistet werden. Die Searchbar in der Navbar soll diese Liste durchsuchen können. Wie mache ich das */}
    </>
  );
}

export default Home;
