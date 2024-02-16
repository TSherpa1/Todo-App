import { useState, createContext, useEffect } from 'react';
import { uid } from 'uid';
import { convertDueDate, timeDifference } from '../utils/conversions';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const [todosSubset, setTodosSubset] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('todos');
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (todo) => {
    const newTodos = todos.length > 0 ? [...todos, todo] : [todo];
    setTodos(newTodos);
  };

  const removeTodo = (todo) => {
    const newTodos = todos.filter((todoElement) => todoElement.id !== todo.id);
    setTodos(newTodos);
  };

  const editTodo = (todo) => {
    const newTodos = todos.map((todoElement) => {
      if (todoElement.id === todo.id) {
        todoElement = todo;
      }
      return todoElement;
    });
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

  const editSubTask = (subTaskName, id, subTasks) => {
    const newSubTasks = subTasks.map((subTask) => {
      if (subTask.id === id) {
        subTask.name = subTaskName;
      }
      return subTask;
    });
    return newSubTasks;
  };

  const getSubTaskTodo = (subTask) => {
    const currentTodo = todos.find(
      (todo) => todo.id === subTask.taskId.current
    );
    return currentTodo;
  };

  const completeSubTask = (subTask) => {
    const currentTodo = getSubTaskTodo(subTask);

    currentTodo.subTasks.forEach((subTaskElement) => {
      if (subTaskElement.id === subTask.id) {
        subTaskElement.isComplete = !subTaskElement.isComplete;
      }
    });
    setTodos([...todos]);
  };

  const repeatTodo = (todo) => {
    const currentTodo = todos.find((todoElement) => todoElement.id === todo.id);
    currentTodo.subTasks.forEach((subTaskElement) => {
      subTaskElement.isComplete = false;
    });
    setTodos([...todos]);
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
        case 'Descending Date':
          return convertDueDate(todo2.dueDate) - convertDueDate(todo1.dueDate);
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

  const filterCategory = (selectedTags) => {
    let filteredTodos = todos.length > 0 ? [...todos] : [];
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

  const powerModeSort = () => {
    if (todosSubset.length === 1) {
      setTodosSubset(todos);
      return;
    }
    const sortedTodos = [...todosSubset].sort((todo1, todo2) => {
      return (
        todo2.complexity + todo2.priority - (todo1.complexity + todo1.priority)
      );
    });
    setTodosSubset([...[sortedTodos[0]]]);
  };

  const getColorDate = (todo) => {
    const difference = timeDifference(todo.dueDate);
    if (difference < 1) {
      return '#fd5353';
    }
    if (difference <= 3) {
      return '#fe7e09';
    } else {
      return '#0096FF';
    }
  };

  const getTags = (todos) => {
    let tagsArray = [];
    if (todos.length !== 0) {
      todos.map((todo) =>
        todo.tags.map((tag) => {
          if (!tagsArray.includes(tag)) {
            tagsArray.push(tag);
          }
        })
      );
    }
    return tagsArray;
  };

  const getLevel = (level) => {
    if (level < 3) {
      return 'Low';
    }
    if (level >= 3 && level <= 6) {
      return 'Medium';
    }
    if (level > 6) {
      return 'High';
    }
  };

  const getProgress = (todo) => {
    const totalSubtasks = todo.subTasks.length;
    const completedSubtasks = todo.subTasks.filter(
      (subTask) => subTask.isComplete === true
    ).length;
    const progress = Math.round((completedSubtasks / totalSubtasks) * 100);
    return progress || 0;
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
        completeSubTask,
        repeatTodo,
        editTodo,
        getColorDate,
        getProgress,
        powerModeSort,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
