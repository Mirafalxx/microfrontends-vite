import React, { useEffect, useState } from "react";
import useTodos from "remoteApp/store";
import Tile from "remoteApp/Tile";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const { todos, addTodo, getTodos } = useTodos();
  const data = { title: "123", name: "123" };

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo({ title, id: new Date().valueOf() });
    setTitle("");
  };

  useEffect(() => {
    console.log(todos);
  }, []);

  return (
    <div className="application_container">
      <form className="add-todo__form" onSubmit={handleAddTodo}>
        <input required placeholder="Todo title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <button type="submit">add todo</button>
      </form>
      <div className="todos">
        {todos.length ? (
          todos.map((todo, idx) => <Tile key={idx} {...todo} />)
        ) : (
          <div className="no_todos">No todos added</div>
        )}
      </div>
    </div>
  );
};

export default Todos;
