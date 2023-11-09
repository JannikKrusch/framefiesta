import React, { ReactNode, useContext, useState } from "react";
import { BlogPost, MotionPicture } from "../../../../utils";
import "./PostInformation.css";
import { INFORMATION_OPTIONS } from "../../../../utils/constants/DetailPost";
import Description from "./Description";
import Review from "./Review";
import Recommended from "./Recommended";
import { DataContext } from "../../../../utils/context/DataContext";
import CustomButton from "../../../shared/button/CustomButton";

interface PostInformationProps {
  selectedBlogPost: BlogPost;
}

function PostInformation(props: PostInformationProps) {
  const selectedBlogPost = props.selectedBlogPost;
  const { blogPosts } = useContext(DataContext);
  const [selectedInformation, setselectedInformation] = useState<number>(0);

  function getRecommendations(
    selectedMovie: MotionPicture,
    allBlogPosts: BlogPost[]
  ): BlogPost[] {
    return allBlogPosts
      .filter(
        (blogPost) =>
          blogPost.relatedMotionPicture.title !== selectedMovie.title
      )
      .map((blogPost) => ({
        ...blogPost,
        score: getScore(selectedMovie, blogPost.relatedMotionPicture),
      }))
      .sort((a, b) => b.score - a.score)
      .map((movieWithScore) => movieWithScore)
      .slice(0, 10);
  }

  function getScore(movie1: MotionPicture, movie2: MotionPicture): number {
    let score = 0;

    for (const genre of movie1.genres) {
      if (movie2.genres.includes(genre)) {
        score += 1;
      }
    }

    if (movie1.director === movie2.director) {
      score += 2;
    }

    for (const actor of movie1.actors) {
      if (movie2.actors.includes(actor)) {
        score += 1;
      }
    }

    return score;
  }

  function displayInformation(): ReactNode {
    switch (selectedInformation) {
      case 1:
        return (
          <Review
            review={selectedBlogPost.review}
            rating={selectedBlogPost.relatedMotionPicture.rating}
            comments={selectedBlogPost.comments}
          />
        );
      case 2:
        return (
          <Recommended
            selectedName={selectedBlogPost.relatedMotionPicture.title}
            recommendations={getRecommendations(
              selectedBlogPost.relatedMotionPicture,
              blogPosts
            )}
          />
        );
      default:
        return (
          <Description
            description={selectedBlogPost.description}
            motionPicture={selectedBlogPost.relatedMotionPicture}
          />
        );
    }
  }

  return (
    <div className="post-information-container">
      <div className="information-options d-flex flex-wrap">
        {INFORMATION_OPTIONS.map((option: string, index: number) => {
          return (
            <CustomButton
              label={option}
              onlyText
              notLast={index < INFORMATION_OPTIONS.length - 1}
              active={selectedInformation === index}
              method={() => setselectedInformation(index)}
            />
          );
        })}
      </div>
      {displayInformation()}
    </div>
  );
}

export default PostInformation;
