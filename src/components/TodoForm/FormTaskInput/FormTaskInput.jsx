import {
  TaskInputContainer,
  TaskInputLabel,
  TaskTextInput,
} from './FormTaskInput.styles';

const TaskInput = ({ handleTaskInputChange, taskName }) => (
  <TaskInputContainer className="edit-task-name-container">
    <TaskInputLabel htmlFor="task-name">Task Name</TaskInputLabel>
    <TaskTextInput
      className="edit-task-input"
      type="text"
      id="task-name"
      value={taskName}
      onChange={handleTaskInputChange}
    />
  </TaskInputContainer>
);

export default TaskInput;
