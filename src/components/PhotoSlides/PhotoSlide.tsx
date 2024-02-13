import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./PhotoSlide.css";

const fadeImages = [
  {
    url: require("../../images/1.jpg"),
    // caption: "First Slide",
  },
  {
    url: require("../../images/2.jpg"),
    // caption: "First Slide",
  },
  {
    url: require("../../images/3.jpg"),
    // caption: "First Slide",
  },
  {
    url: require("../../images/4.jpg"),
    // caption: "First Slide",
  },
];

export default function PhotoSlide() {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img src={fadeImage.url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Fade>
    </div>
  );
}
