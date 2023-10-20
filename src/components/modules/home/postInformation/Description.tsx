import React, { ReactNode } from "react";
import { MotionPicture } from "../../../../utils";
import "./Description.css";

interface DescriptionProps {
  description: string;
  motionPicture: MotionPicture;
}

function Description(props: DescriptionProps) {
  const motionPicture = props.motionPicture;

  const factName = [
    "Year",
    "Age Rating",
    "Genre",
    "Budget",
    "Director",
    "Actors",
  ];
  const factValue = [
    motionPicture.initialRelease,
    motionPicture.ageRating,
    motionPicture.genres.join(", "),
    motionPicture.budget,
    motionPicture.director,
    motionPicture.actors.join(", "),
  ];

  function displayFacts(): ReactNode {
    return (
      <>
        {factName.map((name, index) => {
          return (
            <div className={`row ${index <= 2 ? "highlight" : ""}`}>
              <div className="col-4 col-lg-2">{name}</div>
              <div className="col-8 col-lg-10">{factValue[index]}</div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className="description-container row">
      <div className="col-sm-12 col-md-6 mb-sm-4">{props.description}</div>
      <div className="col-sm-12 col-md-6">{displayFacts()}</div>
    </div>
  );
}

export default Description;
