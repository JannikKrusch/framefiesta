import "./DetailPost.css";
import FullSizeImage from "../fullsizeimage/FullSizeImage";
import PostInformation from "../postInformation/PostInformation";
import { useContext } from "react";
import { DataContext } from "../../../../utils/context/DataContext";
import { convertSelectedIdToBlogPost } from "../../../../utils/helper/BlogPost";
import { StateContext } from "../../../../utils/context/StateContext";
import { CustomError } from "../../../../utils";

//https://dribbble.com/shots/2623175-MediaMe-Film-Card/attachments/524445?mode=media
function DetailPost() {
  const { setError } = useContext(StateContext);
  const { blogPosts, selectedBlogPostId } = useContext(DataContext);
  const selectedBlogPost = convertSelectedIdToBlogPost(
    selectedBlogPostId,
    blogPosts
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
        rating={selectedBlogPost.relatedMotionPicture.rating}
      />
      <PostInformation selectedBlogPost={selectedBlogPost} />
      <div></div>
    </div>
  );
}

export default DetailPost;
