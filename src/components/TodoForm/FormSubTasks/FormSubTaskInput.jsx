import {
  SubTasksInputContainer,
  SubTasksInput,
  SubTasksLabel,
  AddSubTaskBtn,
} from './FormSubTasks.styles';
import { SubTaskList } from '../';

const FormSubTaskInput = ({
  handleSubTaskChange,
  handleAddSubtask,
  handleRemoveSubTask,
  subTasks,
  subTaskInput,
}) => (
  <SubTasksInputContainer className="edit-subtask-input-container">
    <SubTasksLabel htmlFor="subtasks">Add Checklist For Subtasks</SubTasksLabel>
    <SubTasksInput
      type="text"
      name="subtask-input"
      id="subtask-input"
      value={subTaskInput}
      onChange={handleSubTaskChange}
    />
    <AddSubTaskBtn className="add-subtask" onClick={handleAddSubtask}>
      +
    </AddSubTaskBtn>
    <SubTaskList
      subTasks={subTasks}
      handleRemoveSubTask={handleRemoveSubTask}
    />
  </SubTasksInputContainer>
);

export default FormSubTaskInput;
