import React, { ReactNode, useContext, useEffect, useState } from "react";
import { PersonCircle } from "react-bootstrap-icons";
import "./CommentSection.css";
import { ButtonGroup, Form, InputGroup } from "react-bootstrap";
import {
  BlogPost,
  DataContext,
  ServiceContext,
  Comment,
} from "../../../../utils";
import { CustomButton } from "../../..";

interface CommentProps {
  blogPost: BlogPost;
}

export function CommentSection(props: CommentProps): JSX.Element {
  const [sorted, setSorted] = useState<Comment[]>([...props.blogPost.comments]);
  const [sortedState, setSortedState] = useState<number>(-1);
  const [comment, setComment] = useState("");
  const itemsPerPage = 10;
  const [activeCommentPage, setActiveCommentPage] = useState(1);
  const [isFocused, setIsFocused] = useState(false);
  const { user, setUser, blogPosts, setBlogPosts, selectedBlogPostId } =
    useContext(DataContext);
  const { userService } = useContext(ServiceContext);
  const [addCommentLoading, setAddCommentLoading] = useState<boolean>(false);
  const [deleteCommentLoading, setDeleteCommentLoading] =
    useState<boolean>(false);

  function sortNewest(): void {
    const sortedComments = [...props.blogPost.comments].sort(
      (commentA, commentB) => {
        return commentB.date.getTime() - commentA.date.getTime();
      }
    );

    setSorted((prev) => sortedComments);
  }

  function sortOldest(): void {
    const sortedComments = [...props.blogPost.comments].sort(
      (commentA, commentB) => {
        return commentA.date.getTime() - commentB.date.getTime();
      }
    );

    setSorted((prev) => sortedComments);
  }

  async function addCommentAsync(): Promise<void> {
    const trimmedComment = comment.trim();
    if (user && trimmedComment.length > 0) {
      setAddCommentLoading((prev) => true);
      const data = await userService?.addCommentAsync(
        user?.email,
        user?.password,
        trimmedComment,
        props.blogPost.id
      );
      setAddCommentLoading((prev) => false);
      if (data) {
        const tempUser = { ...user };
        tempUser.comments.push(data);
        setUser(tempUser);

        const tempBlogPosts = blogPosts.map((item) => item);
        const tempBlogPost = { ...props.blogPost };
        tempBlogPost.comments.push(data);
        const index = tempBlogPosts.findIndex(
          (item) => item.id === tempBlogPost.id
        );
        tempBlogPosts[index] = tempBlogPost;
        setBlogPosts(tempBlogPosts);
      }
    }
  }

  async function deleteCommentAsync(commentId: string): Promise<void> {
    if (user) {
      setAddCommentLoading((prev) => true);
      const successful = await userService?.deleteCommentAsync(
        user.email,
        user.password,
        commentId,
        props.blogPost.id
      );

      if (successful) {
        const tempUser = { ...user };
        tempUser.comments = tempUser.comments.filter(
          (comment) => comment.id !== commentId
        );
        setUser(tempUser);

        const tempBlogPosts = blogPosts.map((item) => item);
        const tempBlogPost = { ...props.blogPost };
        tempBlogPost.comments = tempBlogPost.comments.filter(
          (comment) => comment.id !== commentId
        );
        const index = tempBlogPosts.findIndex(
          (item) => item.id === tempBlogPost.id
        );
        tempBlogPosts[index] = tempBlogPost;
        setBlogPosts(tempBlogPosts);
      }
    }
  }

  function displayCommentPages(): ReactNode {
    const amountCommentPages = Math.ceil(sorted.length / 10);
    let buttonLabels = [];
    for (let i = 1; i <= amountCommentPages; i++) {
      buttonLabels.push(i);
    }
    return (
      <ButtonGroup>
        {buttonLabels.map((label, index) => {
          return (
            <CustomButton
              key={index}
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

  useEffect(() => {
    setSorted([...props.blogPost.comments]);

    if (sortedState === -1) {
      sortNewest();
      setSortedState(1);
    }
  }, [props.blogPost.comments]);

  return (
    <div className="commentsection-container" id={"comment-section-start"}>
      <div className="commentsection-header">
        <span>Comments ({props.blogPost.comments.length})</span>
        <div className="">
          <ButtonGroup>
            <CustomButton
              label={"Oldest"}
              active={sortedState === 0}
              notLast
              method={() => {
                setSortedState(0);
                sortOldest();
              }}
            />
            <CustomButton
              label={"Newest"}
              active={sortedState === 1}
              method={() => {
                setSortedState(1);
                sortNewest();
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
        <div className="comment-input-buttons">
          <ButtonGroup>
            <CustomButton
              label={"Cancel"}
              active={false}
              notLast
              onlyText
              method={() => setIsFocused((prev) => false)}
            />
            <CustomButton
              label={"Comment"}
              active
              notLast={false}
              loading={addCommentLoading}
              method={async () => await addCommentAsync()}
            />
          </ButtonGroup>
        </div>
      ) : (
        <></>
      )}

      {sorted
        .slice(
          (activeCommentPage - 1) * itemsPerPage,
          activeCommentPage * itemsPerPage
        )
        .map((comment: Comment, index: number) => {
          const isUserComment = comment.userName === user?.name;

          return (
            <div className="comment-container g-0 row" key={index}>
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

              <div hidden={!isUserComment} className="comment-input-buttons">
                <ButtonGroup>
                  <CustomButton
                    label={"Delete comment"}
                    active
                    notLast={false}
                    loading={deleteCommentLoading}
                    method={async () => await deleteCommentAsync(comment.id)}
                  />
                </ButtonGroup>
              </div>
            </div>
          );
        })}

      {displayCommentPages()}
    </div>
  );
}
