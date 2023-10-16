import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="row welcome-title">
        <span>Welcome to FilmFiesta</span>
      </div>
      <div className="row welcome-intro">
        <span>You like films and series?</span>
        <span>Then you are in the right place!</span>
        <span>
          We're a team of dedicated motion picture nerds with the goal of
          helping you find your next favorite film/series.
        </span>
      </div>
    </div>
  );
}

export default Welcome;
