import React from "react";
import "./HomeItem.css";
import HomeSlider from "../slider/HomeSlider";

export default function HomeItem() {
  return (
    <>
      <div className="cont">
        <h1 className="tittlestyle">Share your experiences</h1>
        <div classname="tittle-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue ipsum
            nunc
          </p>
          <p>
            feugiat elementum ipsum convallis commodo. Et mattis ultricies
            fringilla
          </p>
          <p> nullacongue ultrices ultrices vitae orci.</p>
        </div>
      </div>
      <HomeSlider />
    </>
  );
}
