import "./DetailPost.css";
import FullSizeImage from "../fullsizeimage/FullSizeImage";
import PostInformation from "../postInformation/PostInformation";
import { useContext } from "react";
import { DataContext } from "../../../../utils/context/DataContext";

//https://dribbble.com/shots/2623175-MediaMe-Film-Card/attachments/524445?mode=media
function DetailPost() {
  const { blogPosts } = useContext(DataContext);

  return (
    <div className="detail-post-container w-100">
      <FullSizeImage image={blogPosts[0].relatedMotionPicture.image} />
      <PostInformation blogPost={blogPosts[0]} recommendations={[]} />
      <div></div>
    </div>
  );
}

export default DetailPost;
