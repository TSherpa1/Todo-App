import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../context/todoContext';
import { SubTaskList } from '../';
import { uid } from 'uid';
import {
  TodoFormContainer,
  TodoForm,
  EditTaskNameContainer,
  EditPriorityContainer,
  EditComplexityContainer,
  RadioBtnContainer,
} from './AddTodoForm.styles';

const AddTodoForm = () => {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState(null);
  const [complexity, setComplexity] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [time, setTime] = useState(null);
  const [subTaskInput, setSubTaskInput] = useState('');
  const [subTasks, setSubTasks] = useState([]);
  const [tags, setTags] = useState('');

  const { addTodo } = useContext(TodoContext);
  const navigate = useNavigate();

  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const createTodo = () => {
    const newTodo = {
      id: uid(),
      todoName,
      isComplete: false,
      priority,
      complexity,
      dueDate,
      time,
      subTasks: subTasks,
      tags: tags,
    };
    //linking subTasks to todo via todo id
    newTodo.subTasks = assignTodoForSubTask(newTodo.subTasks, newTodo.id);
    return newTodo;
  };

  const assignTodoForSubTask = (subTasks, id) => {
    console.log('subtasks', subTasks);
    subTasks.forEach((subTask) => {
      subTask.taskId = id;
    });
    return subTasks;
  };

  const clearForm = () => {
    setTodoName('');
    setPriority(null);
    setComplexity(null);
    setDueDate(null);
    setTime(null);
    setTags('');
  };

  const handleAddSubtask = (event) => {
    event.preventDefault();
    const newSubTask = { name: subTaskInput, id: uid() };
    const newSubTasks = [...subTasks, newSubTask];
    setSubTasks(newSubTasks);
    setSubTaskInput('');
  };

  const handleEditSubTask = (subTaskName, id) => {
    const newSubTasks = subTasks.map((subTask) => {
      if (subTask.id === id) {
        subTask.name = subTaskName;
      }
      return subTask;
    });
    setSubTasks(newSubTasks);
    console.log('add form', subTasks);
  };

  const handleSubmit = (event) => {
    // console.log('handleSubmit');
    event.preventDefault();
    const newTodo = createTodo();
    addTodo(newTodo);
    clearForm();
    navigate('/');
    console.log(newTodo);
  };

  // console.log('priority', priority);
  return (
    <TodoFormContainer className="todo-form-container">
      <TodoForm onSubmit={handleSubmit}>
        <EditTaskNameContainer className="edit-task-name-container">
          <label htmlFor="task-name">Task Name</label>
          <input
            type="text"
            id="task-name"
            value={todoName}
            onChange={(event) => {
              setTodoName(event.target.value);
            }}
          />
        </EditTaskNameContainer>
        <EditPriorityContainer className="edit-priority-container">
          <label htmlFor="priority">Select Priority Level</label>
          {levels.map((level) => (
            <RadioBtnContainer className="radio-btn" key={level}>
              <label htmlFor={level}>{level}</label>
              <input
                type="radio"
                name="priority"
                id={level}
                value={level}
                onChange={(event) => {
                  setPriority(event.target.value);
                }}
              />
            </RadioBtnContainer>
          ))}
        </EditPriorityContainer>
        <EditComplexityContainer className="edit-complexity-container">
          <label htmlFor="complexity">Select Complexity Level</label>
          {levels.map((level) => (
            <div className="radio-btn" key={level}>
              <label htmlFor={level}>{level}</label>
              <input
                key={level}
                type="radio"
                name="complexity"
                id={level}
                value={level}
                onChange={(event) => {
                  setComplexity(event.target.value);
                }}
              />
            </div>
          ))}
        </EditComplexityContainer>
        <div className="edit-time-date-container">
          <>
            <label htmlFor="due-date">Select Due Date</label>
            <input
              type="date"
              name="due-date"
              id="due-date"
              value={dueDate}
              onChange={(event) => {
                setDueDate(event.target.value);
              }}
            />
            <label htmlFor="time">Select Time</label>
            <input
              type="time"
              name="time"
              id="time"
              value={time}
              onChange={(event) => {
                setTime(event.target.value);
              }}
            />
          </>
        </div>
        <div className="edit-subtask-input-container">
          <label htmlFor="subtasks">Add Checklist For Subtasks</label>
          <div>
            <input
              type="text"
              name="subtask-input"
              id="subtask-input"
              value={subTaskInput}
              onChange={(event) => {
                setSubTaskInput(event.target.value);
              }}
            />
            <button className="add-subtask" onClick={handleAddSubtask}>
              Add Subtask
            </button>
          </div>
          <SubTaskList
            subTasks={subTasks}
            handleEditSubTask={handleEditSubTask}
          />
        </div>
        <div className="save-task-btn-container">
          <button className="save-task-btn" onClick={handleSubmit}>
            Save Task
          </button>
        </div>
      </TodoForm>
    </TodoFormContainer>
  );
};

export default AddTodoForm;
