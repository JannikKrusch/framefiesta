import React from "react";
import { Comment } from "../../../../utils/models/Comment";
import { PersonCircle } from "react-bootstrap-icons";
import "./CommentSection.css";

interface CommentProps {
  comments: Comment[];
}

function CommentSection(props: CommentProps) {
  return (
    <div className="commentsection-container">
      {props.comments.map((comment: Comment) => {
        return (
          <div className="comment-container g-0 row">
            <div className="row">
              <div className="col-auto">
                <PersonCircle className="comment-author-icon" size={"3rem"} />
              </div>
              <div className="col mb-2">
                <div className="comment-author-name row">
                  {comment.userName}
                </div>
                <div className="row">{comment.date.toLocaleDateString()}</div>
              </div>
            </div>
            <div className="row">{comment.text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentSection;
