import React, { ReactNode, useState } from "react";
import { BlogPost } from "../../../../utils";
import "./PostInformation.css";
import { INFORMATION_OPTIONS } from "../../../../utils/constants/DetailPost";
import Description from "./Description";
import Review from "./Review";
import Recommended from "./Recommended";

interface PostInformationProps {
  blogPost: BlogPost;
  recommendations: BlogPost[];
}

function PostInformation(props: PostInformationProps) {
  const blogPost = props.blogPost;
  const [selectedInformation, setselectedInformation] = useState<number>(0);

  function displayInformation(): ReactNode {
    switch (selectedInformation) {
      case 1:
        return (
          <Review
            review={blogPost.review}
            rating={blogPost.relatedMotionPicture.rating}
            comments={blogPost.comments}
          />
        );
      case 2:
        return <Recommended />;
      default:
        return (
          <Description
            description={blogPost.description}
            motionPicture={blogPost.relatedMotionPicture}
          />
        );
    }
  }

  return (
    <div className="post-information-container">
      <div className="information-options d-flex flex-wrap">
        {INFORMATION_OPTIONS.map((option: string, index: number) => {
          return (
            <span
              onClick={() => setselectedInformation(index)}
              className={`information-option ${
                selectedInformation == index ? "active" : ""
              }`}
            >
              {option}
            </span>
          );
        })}
      </div>
      {displayInformation()}
    </div>
  );
}

export default PostInformation;
