import React from "react";
import "./FullSizeImage.css";

interface FullSizeImageProps {
  image: string;
}

function FullSizeImage(props: FullSizeImageProps) {
  const image = props.image;
  return (
    // <div className="full-size-image-container">
    <img className="full-size-image" src={image} alt="Motion picture"></img>
    // </div>
  );
}

export default FullSizeImage;
