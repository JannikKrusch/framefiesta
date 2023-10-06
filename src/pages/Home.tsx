import { useState } from "react";
import { BlockPost } from "../utils";
import { Loader } from "../components/shared";

function Home() {
  const [blogPosts, setblogPosts] = useState<BlockPost[]>([]);

  return (
    <>
      <Loader />
      {/* Hier sollen später Elemente aufgelistet werden. Die Searchbar in der Navbar soll diese Liste durchsuchen können. Wie mache ich das */}
    </>
  );
}

export default Home;
