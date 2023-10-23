import React, { useContext, useState } from "react";
import { Comment } from "../../../../utils/models/Comment";
import { PersonCircle } from "react-bootstrap-icons";
import "./CommentSection.css";
import { Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import { DataContext } from "../../../../utils/context/DataContext";

interface CommentProps {
  comments: Comment[];
}

function CommentSection(props: CommentProps) {
  const [filtered, setfiltered] = useState<Comment[]>(props.comments);
  const [comment, setComment] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { user } = useContext(DataContext);
  //! filter
  function filterNewest(): void {
    const sortedComments = [...props.comments].sort((commentA, commentB) => {
      return commentB.date.getTime() - commentA.date.getTime();
    });

    console.warn("filterNewest");
    setfiltered((prev) => sortedComments);
  }

  function filterOldest(): void {
    const sortedComments = [...props.comments].sort((commentA, commentB) => {
      return commentA.date.getTime() - commentB.date.getTime();
    });

    console.warn("filterOldest");
    setfiltered((prev) => sortedComments);
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

      <InputGroup data-bs-theme="dark" hidden={user === undefined}>
        <InputGroup.Text className="comment-inputgroup">
          <PersonCircle className="comment-author-icon" size={"3rem"} />
        </InputGroup.Text>
        <Form.Control
          className="comment-inputgroup"
          rows={Math.min(comment.split("\n").length, 10)}
          as="textarea"
          placeholder="Add Comment..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            console.warn(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            if (!comment.trim()) {
              setIsFocused(false);
            }
          }}
        />
      </InputGroup>
      {isFocused ? (
        <>
          <div className="comment-input-buttons ">
            <Button className="submit-button">Comment</Button>
            <Button className="cancel-button">Cancel</Button>
          </div>
        </>
      ) : (
        <></>
      )}

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
