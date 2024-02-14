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

const TodoFormComponent = ({ isEditing, todo }) => {
  const [taskName, setTaskName] = useState(isEditing ? todo.taskName : '');
  const [priority, setPriority] = useState(isEditing ? todo.priority : null);
  const [complexity, setComplexity] = useState(
    isEditing ? todo.complexity : null
  );
  const [dueDate, setDueDate] = useState(isEditing ? todo.dueDate : '');
  const [time, setTime] = useState(isEditing ? todo.time : '');
  const [subTaskInput, setSubTaskInput] = useState('');
  const [subTasks, setSubTasks] = useState(isEditing ? todo.subTasks : []);
  const [tagsInput, setTagsInput] = useState(
    isEditing ? todo.tags.toString() : ''
  );
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(false);
  const [dateTimeError, setDateTimeError] = useState([]);
  const [taskProgress, setTaskProgress] = useState(null);

  const {
    addTodo,
    removeSubTask,
    editSubTask,
    addSubTask,
    getLevel,
    editTodo,
  } = useContext(TodoContext);
  const navigate = useNavigate();

  //creating a taskId variable prior to creating todo to allow link to subTask via subTask.id
  const taskId = useRef(uid());

  const createTask = () => {
    if (isEditing) {
      const editedTask = {
        id: todo.id,
        taskName,
        isComplete: todo.isComplete,
        priority,
        priorityLevel: getLevel(priority),
        complexity,
        complexityLevel: getLevel(complexity),
        dueDate,
        time,
        subTasks,
        tags: convertTags() || [],
        taskProgress,
      };
      return editedTask;
    } else {
      const newTask = {
        id: taskId.current,
        taskName,
        isComplete: false,
        priority,
        priorityLevel: getLevel(priority),
        complexity,
        complexityLevel: getLevel(complexity),
        dueDate,
        time,
        subTasks,
        tags: convertTags() || [],
        taskProgress,
      };
      return newTask;
    }
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
    if (tagsInput !== '') {
      const convertedTags = tagsInput.split(',').map((tag) => tag.trim());
      return convertedTags;
    }
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
    //form validation check
    const inputs = [taskName, priority, complexity, dueDate, time];
    const dateTimeErrorArray = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === '' || inputs[i] === null) {
        if (inputs[i] === time) {
          dateTimeErrorArray.push('time');
        }
        if (inputs[i] === dueDate) {
          dateTimeErrorArray.push('dueDate');
        }
        setDateTimeError(dateTimeErrorArray);
        setError(true);
        return;
      }
    }
    if (isEditing) {
      const newTask = createTask();
      editTodo(newTask);
      setError(false);
    } else {
      const newTask = createTask();
      addTodo(newTask);
      setError(false);
    }
    clearForm();
    navigate('/');
  };

  return (
    <TodoFormContainer className="todo-form-container">
      <TodoForm
        className="todo-form"
        onKeyDown={(event) => {
          event.key === 'Enter' && event.preventDefault();
        }}
      >
        <FormHeader isEditing={isEditing} />
        <FormTaskInput
          taskName={taskName}
          handleTaskInputChange={handleTaskInputChange}
          error={error === true && taskName === ''}
        />

        <FormPriorityComplexity
          handleChange={handlePriorityChange}
          type="Priority"
          currentLevel={priority}
          error={error === true && priority === null}
        />
        <FormPriorityComplexity
          handleChange={handleComplexityChange}
          type="Complexity"
          currentLevel={complexity}
          error={error === true && complexity === null}
        />
        <FormTimeDate
          handleTimeChange={handleTimeChange}
          handleDateChange={handleDateChange}
          time={time}
          dueDate={dueDate}
          error={error === true}
          dateTimeError={dateTimeError}
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
