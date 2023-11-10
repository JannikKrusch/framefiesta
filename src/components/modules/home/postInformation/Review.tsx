import { Card, Placeholder, ProgressBar } from "react-bootstrap";
import "./Review.css";
import { useState } from "react";
import { Comment } from "../../../../utils/models/Comment";
import CommentSection from "./CommentSection";
import { BlogPost } from "../../../../utils";

interface ReviewProps {
  blogPost: BlogPost;
}

function Review(props: ReviewProps) {
  const [showRating, setshowRating] = useState<boolean>(false);

  function toggleRating() {
    setshowRating((prev) => !prev);
  }

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

export default Review;
