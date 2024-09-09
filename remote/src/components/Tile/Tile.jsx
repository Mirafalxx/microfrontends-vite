import React from "react";
import useTodos from "../../store";
import "./style.css";

const Tile = ({ title, id }) => {
  const { deleteTodo } = useTodos();
  return (
    <div className="tile">
      <h1>{title}</h1>
      <p className="delete_btn" onClick={() => deleteTodo(id)}>
        X
      </p>
    </div>
  );
};

export default Tile;
