import { useState, createContext } from 'react';
import { uid } from 'uid';

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

  const addSubTask = (subTaskInput, taskId, subTasks) => {
    const newSubTask = {
      name: subTaskInput,
      id: uid(),
      taskId,
    };
    const newSubTasks = [...subTasks, newSubTask];
    return newSubTasks;
  };

  const removeSubTask = (subTask, subTasks) => {
    const newSubTasks = subTasks.filter(
      (subTaskElement) => subTaskElement.id !== subTask.id
    );
    return newSubTasks;
  };

  const editSubTask = (id, subTaskName, subTasks) => {
    const newSubTasks = subTasks.map((subTask) => {
      if (subTask.id === id) {
        subTask.name = subTaskName;
      }
      return subTask;
    });
    return newSubTasks;
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleComplete,
        addSubTask,
        removeSubTask,
        editSubTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
