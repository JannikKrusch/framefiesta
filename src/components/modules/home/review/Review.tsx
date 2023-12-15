import { CommentSection } from "../../..";
import { BlogPost } from "../../../../utils";
import "./Review.css";

interface ReviewProps {
  blogPost: BlogPost;
}

export function Review(props: ReviewProps): JSX.Element {
  return (
    <>
      <div className="row">
        <div className="col mb-4 justify-text">{props.blogPost.review}</div>
      </div>

      <CommentSection blogPost={props.blogPost} />
    </>
  );
}
