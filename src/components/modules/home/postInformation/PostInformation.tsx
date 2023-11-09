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
      ) // Den ausgewählten Film von den Empfehlungen ausschließen
      .map((blogPost) => ({
        ...blogPost,
        score: getScore(selectedMovie, blogPost.relatedMotionPicture),
      }))
      .sort((a, b) => b.score - a.score) // Sortieren nach Score in absteigender Reihenfolge
      .map((movieWithScore) => movieWithScore) // Entferne den Score und gib nur die Filme zurück
      .slice(0, 10); // Zum Beispiel die Top 10 Empfehlungen zurückgeben
  }

  function getScore(movie1: MotionPicture, movie2: MotionPicture): number {
    let score = 0;

    // Für jedes übereinstimmende Genre, erhöhe den Score
    for (const genre of movie1.genres) {
      if (movie2.genres.includes(genre)) {
        score += 1;
      }
    }

    // Wenn sie denselben Regisseur haben, erhöhe den Score
    if (movie1.director === movie2.director) {
      score += 2;
    }

    // Für jeden gemeinsamen Schauspieler, erhöhe den Score
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
