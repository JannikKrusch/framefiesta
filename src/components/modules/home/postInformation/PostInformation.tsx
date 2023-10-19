import React, { useState } from "react";
import { BlogPost, MotionPicture } from "../../../../utils";
import "./PostInformation.css";
import { INFORMATION_OPTIONS } from "../../../../utils/constants/DetailPost";

interface PostInformationProps {
  blogPost: BlogPost;
}

function PostInformation(props: PostInformationProps) {
  const blogPost = props.blogPost;
  const [selectedInformation, setselectedInformation] = useState<number>(0);

  return (
    <div className="post-information-container">
      <div className="information-options d-flex">
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
    </div>
  );
}

export default PostInformation;
