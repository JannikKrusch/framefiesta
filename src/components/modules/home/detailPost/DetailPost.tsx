import { FullSizeImage, PostInformation } from "../../..";
import {
  BlogPost,
  CustomError,
  DataContext,
  StateContext,
  convertSelectedIdToBlogPost,
} from "../../../../utils";
import "./DetailPost.css";
import { useContext } from "react";

//https://dribbble.com/shots/2623175-MediaMe-Film-Card/attachments/524445?mode=media
interface DetailPostProps {
  blogPosts: BlogPost[];
}

export function DetailPost(props: DetailPostProps): JSX.Element {
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
