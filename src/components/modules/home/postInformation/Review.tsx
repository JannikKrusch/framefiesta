import { Card, Placeholder, ProgressBar } from "react-bootstrap";
import "./Review.css";
import { useState } from "react";
import { Comment } from "../../../../utils/models/Comment";
import CommentSection from "./CommentSection";

interface ReviewProps {
  review: string;
  rating: number;
  comments: Comment[];
}

function Review(props: ReviewProps) {
  const [showRating, setshowRating] = useState<boolean>(false);

  function toggleRating() {
    setshowRating((prev) => !prev);
  }

  return (
    <>
      <div className="row">
        <div className="rating-column col-sm-12 col-md-6 col-lg-4 mb-4 mb-md-0">
          <span>Fiesta Rating</span>
          {showRating ? (
            <ProgressBar
              className="review-progressbar"
              animated
              min={0}
              max={10}
              now={props.rating}
              label={`${props.rating}`}
              onClick={toggleRating}
            />
          ) : (
            <Placeholder
              className="review-placeholder"
              as={ProgressBar}
              animation="glow"
              onClick={toggleRating}
            >
              <Placeholder />
            </Placeholder>
          )}
        </div>
        <div className="col-sm-12 col-md-6 col-lg-8 mb-4">
          <span className="review-text">{props.review}</span>
        </div>
      </div>

      <CommentSection comments={props.comments} />
    </>
  );
}

export default Review;
