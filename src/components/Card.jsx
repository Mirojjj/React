import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, link, tags }) => {
  return (
    <Link to={link}>
      <div className=" w -full border-2 p-6 rounded-lg mx-40 mt-6 hover:bg-green-200 cursor-pointer">
        <div className="title">Title : {title}</div>
        <div className="descrption mt-3">Description: {description}</div>
        <div className="tags flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <div className=" p-1 border-2 text-xs"># {tag}</div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
