import React from "react";
import { BlogPost } from "../../../utils";
import "./Teaser.css";

interface TeaserProps {
  blogPost: BlogPost;
}

function Teaser(props: TeaserProps) {
  const motionPicture = props.blogPost.motionPicture;
  return (
    <div className="teaser-content">
      <div className="teaser-card">
        <div className="teaser-image">
          <img
            className="teaser-image"
            src={`${motionPicture.image}`}
            alt="Blogpost"
          ></img>
        </div>
        <div className="row g-0 teaser-text">
          <span className="col-4">Title:</span>
          <span className="col">{motionPicture.title}</span>
        </div>
        <div className="row g-0 teaser-text">
          <span className="col-4">Release:</span>
          <span className="col">{motionPicture.initialRelease}</span>
        </div>
        <div className="row g-0 teaser-text">
          <span className="col-4">Genres</span>
          <span className="col">
            {motionPicture.genres.map((genre, index) => {
              return (
                <span>
                  {genre}
                  {index >= 0 && index < motionPicture.genres.length - 1
                    ? " | "
                    : ""}
                </span>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Teaser;
