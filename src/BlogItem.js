import React from "react";
import "./BlogItem.css";

const BlogItem = (props) => {
  const { myData } = props;
  return (
    <div className="parent-blog-container">
      {myData.map((item) => {
        return (
          <div className="blog-container" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogItem;
