import { FullSizeImage, PostInformation } from "../../..";
import {
  BlogPost,
  DataContext,
  convertSelectedIdToBlogPost,
} from "../../../../utils";
import "./DetailPost.css";
import { useContext } from "react";

interface DetailPostProps {
  blogPosts: BlogPost[];
}

export function DetailPost(props: DetailPostProps): JSX.Element {
  const { selectedBlogPostId } = useContext(DataContext);
  const selectedBlogPost = convertSelectedIdToBlogPost(
    selectedBlogPostId,
    props.blogPosts
  );

  if (!selectedBlogPost) {
    return <></>;
  }

  return (
    <div className="detail-post-container">
      <FullSizeImage
        title={selectedBlogPost.relatedMotionPicture.title}
        image={selectedBlogPost.relatedMotionPicture.image}
        rating={selectedBlogPost.relatedMotionPicture.rating}
      />
      <PostInformation selectedBlogPost={selectedBlogPost} />
      <div></div>
    </div>
  );
}
