import React from "react";
import "./style.css";

const Tile = ({ title, name, handleDelete }) => {
  return (
    <div className="tile">
      <h1>{title}</h1>
      <p>{name}</p>
    </div>
  );
};

export default Tile;
