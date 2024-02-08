import {
  TaskInputContainer,
  TaskInputLabel,
  TaskTextInput,
  ErrorText,
} from './FormTaskInput.styles';

const TaskInput = ({ handleTaskInputChange, taskName, error }) => (
  <TaskInputContainer className="edit-task-name-container">
    <TaskInputLabel htmlFor="task-name">* Task Name</TaskInputLabel>
    <TaskTextInput
      className="edit-task-input"
      placeholder="Enter task name"
      type="text"
      id="task-name"
      value={taskName}
      onChange={handleTaskInputChange}
    />
    <ErrorText>{error ? '* Required Field' : ''}</ErrorText>
  </TaskInputContainer>
);

export default TaskInput;
