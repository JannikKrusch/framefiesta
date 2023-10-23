import React from "react";
import { BlogPost } from "../../../../utils";

interface RecommendedProps {
  motionPictureName: string;
  recommendations: BlogPost[];
}

function Recommended() {
  return (
    <div className="recommended-container">
      <div className="recommended-headline">If you like</div>
      <div className="teaser-container"></div>
    </div>
  );
}

export default Recommended;
