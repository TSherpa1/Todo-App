import { useState, useContext, Fragment, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../context/todoContext';
import { SubTaskList } from '../';
import { uid } from 'uid';
import {
  TodoFormContainer,
  TodoForm,
  EditTaskNameContainer,
  EditTaskInput,
  EditPriorityContainer,
  EditComplexityContainer,
  RadioBtnContainer,
  RadioBtnInput,
} from './AddTodoForm.styles';

const AddTodoForm = () => {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState(null);
  const [complexity, setComplexity] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [time, setTime] = useState(null);
  const [subTaskInput, setSubTaskInput] = useState('');
  const [subTasks, setSubTasks] = useState([]);
  const [tagsInput, setTagsInput] = useState('');
  const [tags, setTags] = useState([]);

  const { addTodo } = useContext(TodoContext);
  const navigate = useNavigate();

  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //creating a taskId variable prior to creating todo to allow link to subTask via subTask.id
  const taskId = useRef(uid());

  const createTodo = () => {
    const newTodo = {
      id: taskId.current,
      todoName,
      isComplete: false,
      priority,
      complexity,
      dueDate,
      time,
      subTasks: subTasks,
      tags: convertTags(),
    };
    return newTodo;
  };

  const clearForm = () => {
    setTodoName('');
    setPriority(null);
    setComplexity(null);
    setDueDate(null);
    setTime(null);
    setTags('');
  };

  const convertTags = () => {
    const tags = tagsInput.split(',').map((tag) => tag.trim());
    return tags;
  };

  const handleAddSubtask = (event) => {
    event.preventDefault();
    const newSubTask = {
      name: subTaskInput,
      id: uid(),
      taskId: taskId.current,
    };
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
    console.log('add form subTasks', subTasks);
  };

  const handleRemoveSubTask = (event, subTask) => {
    event.preventDefault();
    const newSubTasks = subTasks.filter(
      (subTaskElement) => subTaskElement.id !== subTask.id
    );
    setSubTasks(newSubTasks);
  };

  const handleSubmit = (event) => {
    console.log('handleSubmit ran');
    event.preventDefault();
    const newTodo = createTodo();
    addTodo(newTodo);
    clearForm();
    navigate('/');
    console.log(newTodo);
  };

  return (
    <TodoFormContainer className="todo-form-container">
      <TodoForm>
        <EditTaskNameContainer className="edit-task-name-container">
          <label htmlFor="task-name">Task Name</label>
          <EditTaskInput
            className="edit-task-input"
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
          <RadioBtnContainer className="radio-btn">
            {levels.map((level) => (
              <Fragment key={level}>
                <RadioBtnInput
                  className="radio-btn-input"
                  type="radio"
                  name="priority"
                  id={level}
                  value={level}
                  onChange={(event) => {
                    setPriority(event.target.value);
                  }}
                />
              </Fragment>
            ))}
          </RadioBtnContainer>
        </EditPriorityContainer>
        <EditComplexityContainer className="edit-complexity-container">
          <label htmlFor="complexity">Select Complexity Level</label>
          <RadioBtnContainer>
            {levels.map((level) => (
              <Fragment key={level}>
                <RadioBtnInput
                  key={level}
                  type="radio"
                  name="complexity"
                  id={level}
                  value={level}
                  onChange={(event) => {
                    setComplexity(event.target.value);
                  }}
                />
              </Fragment>
            ))}
          </RadioBtnContainer>
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
            handleRemoveSubTask={handleRemoveSubTask}
          />
        </div>
        <div className="edit-tags-container">
          <label htmlFor="tags">Add Tags</label>
          <div>
            <input
              type="text"
              name="tag-input"
              id="tag-input"
              value={tagsInput}
              onChange={(event) => {
                setTagsInput(event.target.value);
              }}
            />
          </div>
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
