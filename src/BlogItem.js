import React from "react";
import "./BlogItem.css";

const BlogItem = (props) => {
  const { myData } = props;
  return (
    <div className="parent-blog-container" id="parentID">
      {myData.map((item) => {
        return (
          <div className="blog-container" key={item.id} id="blogID">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogItem;
