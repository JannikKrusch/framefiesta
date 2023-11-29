import React, { ReactNode } from "react";
import "./Description.css";

import { Table } from "react-bootstrap";
import {
  MotionPicture,
  currencyCompactFormat,
  isInstanceOfFilm,
  isInstanceOfSeries,
  listConjunctionFormat,
  timeFormat,
} from "../../../../utils";

interface DescriptionProps {
  description: string;
  motionPicture: MotionPicture;
}

export function Description(props: DescriptionProps): JSX.Element {
  const motionPicture = props.motionPicture;

  const factName = ["Year", "Age", "Genre", "Budget"];
  const factValue = [
    motionPicture.initialRelease,
    motionPicture.ageRating,
    listConjunctionFormat(motionPicture.genres),
    currencyCompactFormat(motionPicture.budget),
  ];

  if (isInstanceOfFilm(motionPicture)) {
    factName.push("Time");
    factValue.push(timeFormat(motionPicture.runTime));
  } else if (isInstanceOfSeries(motionPicture)) {
    factName.push("Seasons", "Episodes");
    factValue.push(motionPicture.seasons, motionPicture.episodes);
  }
  factName.push("Director", "Cast");
  factValue.push(
    motionPicture.director,
    listConjunctionFormat(motionPicture.actors)
  );

  function displayFacts(): ReactNode {
    return (
      <Table responsive borderless>
        <tbody>
          {factName.map((name, index) => {
            return (
              <tr key={index}>
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
