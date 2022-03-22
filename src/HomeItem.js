import React from "react";
import Slider from "react-slick";
import "./HomeItem.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as ArrowIcon1 } from "./asset/arrow1.svg";
import { ReactComponent as ArrowIcon2 } from "./asset/arrow2.svg";

const myDate = () => {
  const currentDate = Date.now();
  const today = new Date(currentDate);
  const month = today.toLocaleString("en-us", { month: "long" });
  const day = today.toLocaleString("en-us", { day: "2-digit" });
  const year = today.getFullYear();
  const updateDate = month + " " + day + ", " + year;
  return updateDate;
};

const myData = [
  {
    id: 1,
    title: "My blog 1",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "My blog 2",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 3,
    title: "My blog 3",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    id: 4,
    title: "My blog 4",
    body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
];

export default function HomeItem() {
  const NextArrow = ({ className, onClick }) => (
    <button
      // style={{ right: "-80px", marginTop: "-100px" }}
      type="button"
      onClick={onClick}
      className={className}
    >
      <ArrowIcon2 fill="#ffffff" />
    </button>
  );

  const PrevArrow = ({ className, onClick }) => (
    <button
      // style={{ left: "-120px", marginTop: "-100px" }}
      type="button"
      onClick={onClick}
      className={className}
    >
      <ArrowIcon1 fill="#ffffff" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    arrows: true,
    autoplay: false,
    draggable: true,
    fade: false,
    swipe: true,
    touchMove: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slid",
    useCSS: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slider-maincontainer">
      <div className="cont">
        <h1 className="tittlestyle">Share your experiences</h1>
        <div>
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
      {/* Top stories */}
      <h1 className="top-story">Top stories</h1>
      <Slider {...settings}>
        {myData.map((slide) => {
          return (
            <div className="rectangle-box" key={slide.id}>
              <img src={window.location.origin + "/1.jpg"} alt="computer" />
              <div className="featured-post">
                <span>{myDate()}</span>
                <label>{slide.title}</label>
                <div className="description">
                  <p className="desc-title">
                    Maintaining a healthy work-life balance is importance for
                    your employee's productivity and performance..
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
