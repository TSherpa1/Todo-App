import {
  SubTasksInputContainer,
  SubTasksInput,
  SubTasksLabel,
  AddSubTaskBtn,
  SubTasksInputBtn,
} from './FormSubTasks.styles';
import { SubTaskList } from '../';

const FormSubTaskInput = ({
  handleSubTaskChange,
  handleAddSubtask,
  handleRemoveSubTask,
  handleEditSubTask,
  subTasks,
  subTaskInput,
}) => (
  <SubTasksInputContainer className="edit-subtask-input-container">
    <SubTasksLabel htmlFor="subtasks">Add Checklist For Subtasks</SubTasksLabel>
    <SubTasksInputBtn>
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
    </SubTasksInputBtn>
    <div>
      <SubTaskList
        subTasks={subTasks}
        handleRemoveSubTask={handleRemoveSubTask}
        handleEditSubTask={handleEditSubTask}
      />
    </div>
  </SubTasksInputContainer>
);

export default FormSubTaskInput;
