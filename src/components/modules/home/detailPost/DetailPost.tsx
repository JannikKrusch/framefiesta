import "./DetailPost.css";
import FullSizeImage from "../fullsizeimage/FullSizeImage";
import PostInformation from "../postInformation/PostInformation";
import { useContext } from "react";
import { DataContext } from "../../../../utils/context/DataContext";
import { convertSelectedIdToBlogPost } from "../../../../utils/helper/BlogPost";
import { StateContext } from "../../../../utils/context/StateContext";
import { BlogPost, CustomError } from "../../../../utils";

//https://dribbble.com/shots/2623175-MediaMe-Film-Card/attachments/524445?mode=media
interface DetailPostProps {
  blogPosts: BlogPost[];
}

function DetailPost(props: DetailPostProps) {
  const { setError } = useContext(StateContext);
  const { selectedBlogPostId } = useContext(DataContext);
  const selectedBlogPost = convertSelectedIdToBlogPost(
    selectedBlogPostId,
    props.blogPosts
  );

  if (!selectedBlogPost) {
    const customError = new CustomError();
    customError.message = "New Error";
    customError.statusCode = 500;
    setError(customError);
    return <></>;
  }

  return (
    <div className="detail-post-container">
      <FullSizeImage
        title={selectedBlogPost.relatedMotionPicture.title}
        image={selectedBlogPost.relatedMotionPicture.image}
        rating={selectedBlogPost.rating}
      />
      <PostInformation selectedBlogPost={selectedBlogPost} />
      <div></div>
    </div>
  );
}

export default DetailPost;
