import React from "react";
import "./home-item.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSlider from "../slider/HomeSlider";

export default function HomeItem() {
  return (
    <div>
      <div className="cont">
        <h1 className="tittlestyle">Share your experiences</h1>
        <div className="text-item">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue ipsum
            nunc
          </p>{" "}
          <p>
            feugiat elementum ipsum convallis commodo. Et mattis ultricies
            fringilla
          </p>
          <p> nullacongue ultrices ultrices vitae orci.</p>
        </div>
      </div>
      <HomeSlider />
    </div>
  );
}
