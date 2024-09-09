import { atom, useAtom } from "jotai";

const todosAtom = atom([]);

const useTodos = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const getTodos = () => {
    return todos;
  };

  return {
    todos,
    deleteTodo,
    addTodo,
    getTodos,
  };
};

export default useTodos;
