import { atom, useAtom } from "jotai";

const todosAtom = atom([]);

const useTodos = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const getTodos = () => {
    return todos;
  };

  return {
    todos,
    addTodo,
    getTodos,
  };
};

export default useTodos;
