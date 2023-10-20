import React, { useState } from "react";
import { Comment } from "../../../../utils/models/Comment";
import { PersonCircle } from "react-bootstrap-icons";
import "./CommentSection.css";
import { Button, ButtonGroup } from "react-bootstrap";

interface CommentProps {
  comments: Comment[];
}

function CommentSection(props: CommentProps) {
  const [filtered, setfiltered] = useState<Comment[]>(props.comments);
  //! filter
  function filterNewest(): void {
    console.warn("first");
    const sortedComments = [...props.comments].sort(
      (commentA, commentB) => commentB.date.getTime() - commentA.date.getTime()
    );

    setfiltered((prev) => sortedComments);
  }

  function filterOldest(): void {
    const filter = props.comments.sort(
      (commentA, commentB) => commentA.date.getTime() - commentB.date.getTime()
    );
    setfiltered((prev) => filter);
  }

  return (
    <div className="commentsection-container">
      <div className="commentsection-header">
        <span>Comments ({props.comments.length})</span>
        <div className="">
          <ButtonGroup>
            <Button className="sort-button" onClick={() => filterOldest()}>
              Sort Oldest
            </Button>
            <Button className="sort-button" onClick={() => filterNewest()}>
              Sort Newst
            </Button>
          </ButtonGroup>
        </div>
      </div>

      {filtered.map((comment: Comment) => {
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
