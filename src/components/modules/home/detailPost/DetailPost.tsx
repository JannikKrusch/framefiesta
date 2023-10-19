import { BlogPost } from "../../../../utils";
import "./DetailPost.css";
import FullSizeImage from "../../fullsizeimage/FullSizeImage";
import PostInformation from "../postInformation/PostInformation";

interface DetailPostProps {
  blogPost: BlogPost;
}

function DetailPost(props: DetailPostProps) {
  const blogPost = props.blogPost;

  return (
    <div className="detail-post-container w-100">
      <FullSizeImage image={blogPost.relatedMotionPicture.image} />
      <PostInformation blogPost={blogPost} />
      <div></div>
    </div>
  );
}

export default DetailPost;
