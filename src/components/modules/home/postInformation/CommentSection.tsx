import React, { ReactNode, useContext, useState } from "react";
import { Comment } from "../../../../utils/models/Comment";
import { PersonCircle } from "react-bootstrap-icons";
import "./CommentSection.css";
import { Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import { DataContext } from "../../../../utils/context/DataContext";
import CustomButton from "../../../shared/button/CustomButton";

interface CommentProps {
  comments: Comment[];
}

function CommentSection(props: CommentProps) {
  const [filtered, setfiltered] = useState<Comment[]>(props.comments);
  const [filteredState, setFilteredState] = useState<number>(-1);
  const [comment, setComment] = useState("");
  const itemsPerPage = 10;
  const [activeCommentPage, setActiveCommentPage] = useState(1);
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

  function displayCommentPages(): ReactNode {
    const amountCommentPages = Math.ceil(filtered.length / 10);
    let buttonLabels = [];
    for (let i = 1; i <= amountCommentPages; i++) {
      buttonLabels.push(i);
    }
    return (
      <ButtonGroup>
        {buttonLabels.map((label, index) => {
          return (
            <CustomButton
              label={label.toString()}
              active={label === activeCommentPage}
              notLast={index < buttonLabels.length - 1}
              href={"#comment-section-start"}
              method={() => setActiveCommentPage((prev) => label)}
            />
          );
        })}
      </ButtonGroup>
    );
  }

  return (
    <div className="commentsection-container" id={"comment-section-start"}>
      <div className="commentsection-header">
        <span>Comments ({props.comments.length})</span>
        <div className="">
          <ButtonGroup>
            <CustomButton
              label={"Oldest"}
              active={filteredState === 0}
              notLast
              method={() => {
                setFilteredState(0);
                filterOldest();
              }}
            />
            <CustomButton
              label={"Newst"}
              active={filteredState === 1}
              method={() => {
                setFilteredState(1);
                filterNewest();
              }}
            />
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
          <div className="comment-input-buttons">
            <ButtonGroup>
              <CustomButton
                label={"Cancel"}
                active={false}
                notLast
                onlyText
                method={() => {}}
              />
              <CustomButton
                label={"Comment"}
                active
                notLast={false}
                method={() => {}}
              />
            </ButtonGroup>
          </div>
        </>
      ) : (
        <></>
      )}

      {filtered
        .slice(
          (activeCommentPage - 1) * itemsPerPage,
          activeCommentPage * itemsPerPage
        )
        .map((comment: Comment) => {
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

      {displayCommentPages()}
    </div>
  );
}

export default CommentSection;
