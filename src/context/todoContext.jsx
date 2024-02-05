import { useState, createContext } from 'react';
import { uid } from 'uid';
import { convertDueDate } from '../utils/helperFunctions';

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
          isComplete: false,
        },
        {
          id: '2f64a5c68',
          name: 'Subtask 2',
          taskId: { current: 'b34f58e99' },
          isComplete: false,
        },
      ],
      tags: ['Tag 1', 'Tag 2'],
      taskName: 'Task 1',
      time: '13:04',
    },
    {
      complexity: 5,
      complexityLevel: 'Medium',
      dueDate: '2024-09-03',
      id: '991a54e35',
      isComplete: false,
      priority: 8,
      priorityLevel: 'High',
      subTasks: [
        {
          id: '2f64ac13868',
          name: 'Subtask 1',
          taskId: { current: 'b3f80558e99' },
          isComplete: false,
        },
        {
          id: '2f64ac68',
          name: 'Subtask 2',
          taskId: { current: 'b3f58e99' },
          isComplete: false,
        },
      ],
      tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
      taskName: 'Task 2',
      time: '19:02',
    },
    {
      complexity: 3,
      complexityLevel: 'Low',
      dueDate: '2024-11-05',
      id: '9914e35',
      isComplete: false,

      priority: 5,
      priorityLevel: 'Medium',
      subTasks: [
        {
          id: '2f64ac13868',
          name: 'Subtask 1',
          taskId: { current: 'b3f80558e99' },
          isComplete: false,
        },
        {
          id: '2f64ac68',
          name: 'Subtask 2',
          taskId: { current: 'b3f58e99' },
          isComplete: false,
        },
      ],
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      taskName: 'Task 3',
      time: '11:04',
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

  const getTodo = (todoId, todos) => {
    return todos.find((todo) => todo.id === todoId);
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

  const addSubTask = (subTaskInput, taskId, subTasks) => {
    const newSubTask = {
      name: subTaskInput,
      id: uid(),
      taskId,
      isComplete: false,
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

  const searchTodo = (todoName) => {
    const searchedTodos = todos.filter((todo) =>
      todo.taskName.toLowerCase().includes(todoName.toLowerCase())
    );
    setTodosSubset(searchedTodos);
  };

  const sortTodos = (sortType) => {
    if (sortType === 'Default') {
      setTodosSubset([...todos]);
      return;
    }
    const newTodosSubset = [...todosSubset].sort((todo1, todo2) => {
      switch (sortType) {
        case 'Ascending Date':
          return convertDueDate(todo1.dueDate) - convertDueDate(todo2.dueDate);
        // return todo1.dueDate - todo2.dueDate;
        case 'Descending Date':
          return convertDueDate(todo2.dueDate) - convertDueDate(todo1.dueDate);
        // return todo2.dueDate - todo1.dueDate;
        case 'Ascending Complexity':
          return todo1.complexity - todo2.complexity;
        case 'Descending Complexity':
          return todo2.complexity - todo1.complexity;
        case 'Ascending Priortiy':
          return todo1.priority - todo2.priority;
        case 'Descending Priority':
          return todo2.priority - todo1.priority;
      }
    });
    setTodosSubset([...newTodosSubset]);
  };

  const getTags = (todos) => {
    let tagsArray = [];
    todos.map((todo) =>
      todo.tags.map((tag) => {
        if (!tagsArray.includes(tag)) {
          tagsArray.push(tag);
        }
      })
    );
    return tagsArray;
  };

  const filterCategory = (selectedTags) => {
    let filteredTodos = [...todos];
    if (selectedTags.length > 0) {
      filteredTodos = [];
      todos.map((todo) =>
        todo.tags.map((tag) => {
          if (selectedTags.includes(tag) && !filteredTodos.includes(todo)) {
            filteredTodos.push(todo);
          }
        })
      );
      setTodosSubset(filteredTodos);
    } else {
      setTodosSubset(todos);
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
        sortTodos,
        getTags,
        filterCategory,
        getTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
