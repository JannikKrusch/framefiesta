import React from "react";
import "./FullSizeImage.css";

interface FullSizeImageProps {
  image: string;
}

function FullSizeImage(props: FullSizeImageProps) {
  const image = props.image;
  return (
    <>
      <div className="image-wrapper">
        <div
          className="background-container"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="centered-image">
          <img src={image} alt="Motion picture"></img>
        </div>
      </div>
    </>
  );
}

export default FullSizeImage;
