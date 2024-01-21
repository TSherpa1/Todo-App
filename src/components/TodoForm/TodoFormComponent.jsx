import { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../context/todoContext';
import { uid } from 'uid';
import {
  TodoFormContainer,
  TodoForm,
  SaveTaskBtn,
} from './TodoFormComponent.styles';
import {
  FormHeader,
  FormTaskInput,
  FormPriorityComplexity,
  FormTimeDate,
  FormSubTaskInput,
  FormTagsInput,
} from './';

const TodoFormComponent = () => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState(null);
  const [complexity, setComplexity] = useState(null);
  const [dueDate, setDueDate] = useState('');
  const [time, setTime] = useState('');
  const [subTaskInput, setSubTaskInput] = useState('');
  const [subTasks, setSubTasks] = useState([]);
  const [tagsInput, setTagsInput] = useState('');
  const [tags, setTags] = useState([]);

  const { addTodo, removeSubTask, editSubTask, addSubTask } =
    useContext(TodoContext);
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
      subTasks,
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
    const convertedTags = tagsInput.split(',').map((tag) => tag.trim());
    return convertedTags;
  };

  const handleAddSubtask = (event) => {
    event.preventDefault();
    const newSubTasks = addSubTask(subTaskInput, taskId, subTasks);
    setSubTasks(newSubTasks);
    setSubTaskInput('');
  };

  const handleEditSubTask = (subTaskName, id) => {
    const newSubTasks = editSubTask(subTaskName, id, subTasks);
    setSubTasks(newSubTasks);
  };

  const handleRemoveSubTask = (subTask) => {
    event.preventDefault();
    const newSubTasks = removeSubTask(subTask, subTasks);
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

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleSubTaskChange = (event) => {
    setSubTaskInput(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTagsInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = createTask();
    addTodo(newTask);
    clearForm();
    navigate('/');
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
          currentLevel={priority}
        />
        <FormPriorityComplexity
          handleChange={handleComplexityChange}
          type="Complexity"
          currentLevel={complexity}
        />
        <FormTimeDate
          handleTimeChange={handleTimeChange}
          handleDateChange={handleDateChange}
          time={time}
          dueDate={dueDate}
        />
        <FormSubTaskInput
          handleSubTaskChange={handleSubTaskChange}
          handleAddSubtask={handleAddSubtask}
          handleRemoveSubTask={handleRemoveSubTask}
          handleEditSubTask={handleEditSubTask}
          subTasks={subTasks}
          subTaskInput={subTaskInput}
        />
        <FormTagsInput
          tagsInput={tagsInput}
          handleTagsChange={handleTagsChange}
        />
        <div className="save-task-btn-container">
          <SaveTaskBtn className="save-task-btn" onClick={handleSubmit}>
            Save Task
          </SaveTaskBtn>
        </div>
      </TodoForm>
    </TodoFormContainer>
  );
};

export default TodoFormComponent;
