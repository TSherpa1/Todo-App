import { useState, createContext } from 'react';
import { uid } from 'uid';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const dummyData = [
    {
      complexity: 7,
      dueDate: '2021-02-02',
      id: '9a5402e35',
      isComplete: false,
      priority: 2,
      subTasks: [
        {
          id: '2f64ac138168',
          name: 'run',
          taskId: { current: 'b3f803558e99' },
        },
        {
          id: '2f64a5c68',
          name: 'lift weights',
          taskId: { current: 'b34f58e99' },
        },
      ],
      tags: ['Excercise', 'Physical'],
      taskName: 'Gym',
      time: '15:04',
    },
    {
      complexity: 7,
      dueDate: '2021-02-02',
      id: '991a54e35',
      isComplete: false,
      priority: 2,
      subTasks: [
        { id: '2f64ac13868', name: 'run', taskId: { current: 'b3f80558e99' } },
        {
          id: '2f64ac68',
          name: 'lift weights',
          taskId: { current: 'b3f58e99' },
        },
      ],
      tags: ['Excercise', 'Physical'],
      taskName: 'Gym',
      time: '15:04',
    },
    {
      complexity: 7,
      dueDate: '2021-02-02',
      id: '991a54025',
      isComplete: false,
      priority: 2,
      subTasks: [
        { id: '2fc13868', name: 'run', taskId: { current: 'b3f558e99' } },
        {
          id: '2f6468',
          name: 'lift weights',
          taskId: { current: 'b3fe99' },
        },
      ],
      tags: ['Excercise', 'Physical'],
      taskName: 'Gym',
      time: '15:04',
    },
  ];

  const [todos, setTodos] = useState(dummyData);

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
