import { useState, useContext, Fragment, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../context/todoContext';
import { SubTaskList } from '../TodoForm';
import { uid } from 'uid';
import {
  TodoFormContainer,
  TodoForm,
  AddFormInputContainer,
  AddFormLabel,
  AddFormTextInput,
} from './TodoFormComponent.styles';
import { FormHeader, FormTaskInput, FormPriorityComplexity } from './';

const TodoFormComponent = () => {
  const [taskName, setTaskName] = useState('');
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

  //creating a taskId variable prior to creating todo to allow link to subTask via subTask.id
  const taskId = useRef(uid());

  const createTask = () => {
    const newTask = {
      id: taskId.current,
      taskName,
      isComplete: false,
      priority,
      complexity,
      dueDate,
      time,
      subTasks: subTasks,
      tags: convertTags(),
    };
    return newTask;
  };

  const clearForm = () => {
    setTaskName('');
    setPriority(null);
    setComplexity(null);
    setDueDate(null);
    setTime(null);
    setTags('');
  };

  const handleTaskInputChange = (event) => {
    setTaskName(event.target.value);
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

  const handlePriorityChange = (event) => {
    event.preventDefault();
    setPriority(Number(event.target.value));
  };

  const handleComplexityChange = (event) => {
    event.preventDefault();
    setComplexity(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    console.log('handleSubmit ran');
    event.preventDefault();
    const newTask = createTask();
    addTodo(newTask);
    clearForm();
    navigate('/');
    console.log(newTask);
  };

  return (
    <TodoFormContainer className="todo-form-container">
      <TodoForm className="todo-form">
        <FormHeader />
        <FormTaskInput
          taskName={taskName}
          handleTaskInputChange={handleTaskInputChange}
        />
        <FormPriorityComplexity
          handleChange={handlePriorityChange}
          type="Priority"
        />
        <FormPriorityComplexity
          handleChange={handleComplexityChange}
          type="Complexity"
        />
        <AddFormInputContainer className="edit-time-date-container">
          <>
            <AddFormLabel htmlFor="due-date">Select Due Date</AddFormLabel>
            <input
              type="date"
              name="due-date"
              id="due-date"
              value={dueDate}
              onChange={(event) => {
                setDueDate(event.target.value);
              }}
            />
            <AddFormLabel htmlFor="time">Select Time</AddFormLabel>
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
        </AddFormInputContainer>
        <AddFormInputContainer className="edit-subtask-input-container">
          <AddFormLabel htmlFor="subtasks">
            Add Checklist For Subtasks
          </AddFormLabel>
          <AddFormTextInput
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
          <SubTaskList
            subTasks={subTasks}
            handleRemoveSubTask={handleRemoveSubTask}
          />
        </AddFormInputContainer>
        <AddFormInputContainer className="edit-tags-container">
          <AddFormLabel htmlFor="tags">Add Tags</AddFormLabel>
          <AddFormTextInput
            type="text"
            name="tag-input"
            id="tag-input"
            value={tagsInput}
            onChange={(event) => {
              setTagsInput(event.target.value);
            }}
          />
        </AddFormInputContainer>
        <div className="save-task-btn-container">
          <button className="save-task-btn" onClick={handleSubmit}>
            Save Task
          </button>
        </div>
      </TodoForm>
    </TodoFormContainer>
  );
};

export default TodoFormComponent;
