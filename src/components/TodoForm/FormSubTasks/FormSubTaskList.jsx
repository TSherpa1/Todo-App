import { FormSubTask } from '..';
import { SubTaskListContainer } from './FormSubTasks.styles';

const FormSubTaskList = ({
  subTasks,
  handleRemoveSubTask,
  handleEditSubTask,
}) => {
  return (
    <SubTaskListContainer className="sub-task-list">
      {subTasks.map((subTask) => (
        <FormSubTask
          key={subTask.id}
          subTask={subTask}
          handleRemoveSubtask={handleRemoveSubTask}
          handleEditSubTask={handleEditSubTask}
        />
      ))}
    </SubTaskListContainer>
  );
};

export default FormSubTaskList;
