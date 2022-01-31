import React from "react";
import "./BlogItem.css";

const myDate = () => {
  const currentDate = Date.now();
  const today = new Date(currentDate);
  const month = today.toLocaleString("en-us", { month: "long" });
  const day = today.toLocaleString("en-us", { day: "2-digit" });
  const year = today.getFullYear();
  const updateDate = month + " " + day + ", " + year;
  return updateDate;
};

const BlogItem = (props) => {
  const { myData } = props;
  return (
    <div className="parent-blog-container">
      {myData.map((item) => {
        return (
          <div className="blog-container" key={item.id}>
            <p>{myDate()}</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogItem;
