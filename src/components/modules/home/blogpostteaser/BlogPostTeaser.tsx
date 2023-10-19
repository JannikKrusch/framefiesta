import React from "react";
import "./BlogPostTeaser.css";
import { BlogPost } from "../../../../utils";
import Teaser from "../../../shared/teaser/Teaser";

interface BlogPostTeaserProps {
  blogPosts: BlogPost[];
}

function BlogPostTeaser(props: BlogPostTeaserProps) {
  const blogPosts = props.blogPosts.slice(0, 4);

  return (
    <div className="row g-0">
      {blogPosts.map((blogPost: BlogPost) => {
        return <Teaser blogPost={blogPost} />;
      })}
    </div>
  );
}

export default BlogPostTeaser;
