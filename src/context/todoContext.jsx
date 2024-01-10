import { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const removeTodo = (todo) => {
    const newTodos = todos.filter((todoElement) => todoElement.id !== todo.id);
    setTodos(newTodos);
  };

  const toggleComplete = (todo) => {
    const newTodos = todos.map((todoElement) => {
      if (todoElement.id === todo.id) {
        todoElement.completed = !todoElement.completed;
      }
      return todoElement;
    });
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};
