import { useState, createContext } from 'react';
import { uid } from 'uid';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const dummyData = [
    {
      complexity: 7,
      complexityLevel: 'High',
      dueDate: '2024-02-02',
      id: '9a5402e35',
      isComplete: false,
      priority: 2,
      priorityLevel: 'Low',
      subTasks: [
        {
          id: '2f64ac138168',
          name: 'Subtask 1',
          taskId: { current: 'b3f803558e99' },
        },
        {
          id: '2f64a5c68',
          name: 'Subtask 2',
          taskId: { current: 'b34f58e99' },
        },
      ],
      tags: ['Tag1', 'Tag2'],
      taskName: 'Task 1',
      time: '15:04',
    },
    {
      complexity: 7,
      complexityLevel: 'Low',
      dueDate: '2024-05-03',
      id: '991a54e35',
      isComplete: false,
      priority: 5,
      priorityLevel: 'Medium',
      subTasks: [
        {
          id: '2f64ac13868',
          name: 'Subtask 1',
          taskId: { current: 'b3f80558e99' },
        },
        {
          id: '2f64ac68',
          name: 'Subtask 2',
          taskId: { current: 'b3f58e99' },
        },
      ],
      tags: ['Tag1', 'Tag2'],
      taskName: 'Task 2',
      time: '15:04',
    },
  ];

  const [todos, setTodos] = useState(dummyData);
  const [todosSubset, setTodosSubset] = useState(dummyData);

  // console.log(todosSubset);

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
        todoElement.isComplete = !todoElement.isComplete;
      }
      return todoElement;
    });
    setTodos(newTodos);
  };

  const searchTodo = (todoName) => {
    const searchedTodos = todos.filter((todo) =>
      todo.taskName.toLowerCase().includes(todoName.toLowerCase())
    );
    // if (
    //   todos.filter((todo) =>
    //     todoName.toLowerCase().includes(todo.taskName.toLowerCase())
    //   )
    // ) {
    //   console.log(true);
    // } else {
    //   console.log(false);
    // }
    setTodosSubset(searchedTodos);
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

  const getLevel = (level) => {
    if (level < 3) {
      return 'Low';
    }
    if (level > 3 && level <= 6) {
      return 'Medium';
    }
    if (level > 6) {
      return 'High';
    }
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
        getLevel,
        searchTodo,
        todosSubset,
        setTodosSubset,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
