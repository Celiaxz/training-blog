import "./HomeItem.css";

const HomeItem = () => {
  return (
    <div>
      <div className="cont">
        <h1 className="tittlestyle">Share your experiences</h1>
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

      {/* Top stories */}

      <h1 className="top-story">Top stories</h1>

      <div className="slid">
        <div className="arrows">
          <svg
            width="55"
            height="95"
            viewBox="0 0 55 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.7939 87.9526L7.47632 47.6351L47.7939 7.31755"
              stroke="black"
              stroke-opacity="0.42"
              stroke-width="13.4392"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="rectangle-box">
          <img src={window.location.origin + "/1.jpg"} alt="computer" />

          <div className="featured-post">
            <small>May 10, 2022</small>
            <label>The Importance of Work-Life-Balance</label>
            <div className="description">
              Maintaining a healthy work-life balance is importance for your
              employee's productivity and performance..
            </div>
          </div>
        </div>
        <div className="arrows">
          <svg
            width="55"
            height="95"
            viewBox="0 0 55 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.47632 87.9526L47.7939 47.6351L7.47632 7.31755"
              stroke="black"
              stroke-opacity="0.42"
              stroke-width="13.4392"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="ellipsis">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="black" />
        </svg>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
        </svg>
      </div>
    </div>
  );
};

export default HomeItem;
