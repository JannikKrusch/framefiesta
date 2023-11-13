import React from "react";
import "./FullSizeImage.css";
import { Image } from "react-bootstrap";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

interface FullSizeImageProps {
  title: string;
  image: string;
  rating: number;
}

function FullSizeImage(props: FullSizeImageProps) {
  const { image, title, rating } = props;
  const starRating = rating / 2;
  const fullStars = Math.floor(starRating);
  const halfStar = starRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <StarFill key={`full_${i}`} />
      ))}
      {halfStar && <StarHalf />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty_${i}`} />
      ))}
    </>
  );
  return (
    <div className="image-wrapper">
      <img src={image} alt="Motion picture" className="full-size-image" />
      <div className="image-overlay"></div>
      <div className="title-overlay">{title}</div>
      <div className="rating-overlay">
        <div className="stars-and-rating">
          {stars} <span>{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default FullSizeImage;
