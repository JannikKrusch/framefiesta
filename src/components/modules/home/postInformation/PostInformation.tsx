import React, { ReactNode, useContext, useState } from "react";
import "./PostInformation.css";
import {
  BlogPost,
  DataContext,
  INFORMATION_OPTIONS,
  MotionPicture,
} from "../../../../utils";
import { CustomButton, Description, Recommended, Review } from "../../..";

interface PostInformationProps {
  selectedBlogPost: BlogPost;
}

export function PostInformation(props: PostInformationProps): JSX.Element {
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
      .slice(0, 12);
  }

  function getScore(
    motionPicture1: MotionPicture,
    motionPicture2: MotionPicture
  ): number {
    let score = 0;

    for (const genre of motionPicture1.genres) {
      if (motionPicture2.genres.includes(genre)) {
        score += 1;
      }
    }

    if (motionPicture1.director === motionPicture2.director) {
      score += 2;
    }

    for (const actor of motionPicture1.actors) {
      if (motionPicture2.actors.includes(actor)) {
        score += 1;
      }
    }

    return score;
  }

  function displayInformation(): ReactNode {
    switch (selectedInformation) {
      case 1:
        return <Review blogPost={selectedBlogPost} />;
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
              key={index}
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
