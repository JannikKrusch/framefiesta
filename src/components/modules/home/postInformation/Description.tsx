import React, { ReactNode } from "react";
import { MotionPicture } from "../../../../utils";
import "./Description.css";
import {
  currencyCompactFormat,
  listConjunctionFormat,
} from "../../../../utils/helper/DataFormatting";
import { Table } from "react-bootstrap";

interface DescriptionProps {
  description: string;
  motionPicture: MotionPicture;
}

function Description(props: DescriptionProps): JSX.Element {
  const motionPicture = props.motionPicture;

  const factName = ["Year", "Age", "Genre", "Budget", "Director", "Cast"];
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
      <Table responsive borderless>
        <tbody>
          {factName.map((name, index) => {
            return (
              <tr>
                <td className={`cell-left ${index <= 2 ? "highlight" : ""}`}>
                  {name}
                </td>
                <td className={`cell-right ${index <= 2 ? "highlight" : ""}`}>
                  {factValue[index]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
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
