import React, { ReactNode } from "react";
import { MotionPicture } from "../../../../utils";
import "./Description.css";
import {
  currencyCompactFormat,
  listConjunctionFormat,
} from "../../../../utils/helper/DataFormatting";

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
    "Cast",
  ];
  const factValue = [
    motionPicture.initialRelease,
    motionPicture.ageRating,
    listConjunctionFormat(motionPicture.genres),
    currencyCompactFormat(motionPicture.budget),
    motionPicture.director,
    listConjunctionFormat(motionPicture.actors),
  ];

  function displayFacts(): ReactNode {
    return (
      <>
        {factName.map((name, index) => {
          return (
            <div className={`row ${index <= 2 ? "highlight" : ""}`} key={index}>
              <div className="col-sm-12 col-md-4">{name}:</div>
              <div className="col-sm-12 col-md-8">{factValue[index]}</div>
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
