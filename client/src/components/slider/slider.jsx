import React from "react";
import "./slider.scss";
import { useState } from "react";

export default function Slider({ images }) {
  const [imageIndex, setImageIndex] = React.useState(null);

  function changeSlide(direction) {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      }
      else {
        setImageIndex(imageIndex - 1)
      }
    }
    else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      }
      else {
        setImageIndex(imageIndex + 1)
      }
    }
  }

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullslider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="./arrow.png" alt="" />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img src="./arrow.png" onClick={() => changeSlide("right")} className="right" alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="bigImage" onClick={() => setImageIndex(0)}>
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index+1)}
          />
        ))}
      </div>
    </div>
  );
}
