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
        <div className="col mb-4">
          <span className="review-text">{props.blogPost.review}</span>
        </div>
      </div>

      <CommentSection blogPost={props.blogPost} />
    </>
  );
}
