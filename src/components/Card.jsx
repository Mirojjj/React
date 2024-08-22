import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, link }) => {
  return (
    <Link to={link}>
      <div className=" w -full border-2 p-6 rounded-lg mx-40 mt-6 hover:bg-green-200 cursor-pointer">
        <div className="title">Title : {title}</div>
        <div className="descrption">Description: {description}</div>
      </div>
    </Link>
  );
};

export default Card;
