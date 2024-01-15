import { FormSubTask } from '..';

const FormSubTaskList = ({ subTasks, handleRemoveSubTask }) => {
  return (
    <div className="sub-task-list">
      {subTasks.map((subTask) => (
        <FormSubTask
          key={subTask.id}
          subTask={subTask}
          handleRemoveSubtask={handleRemoveSubTask}
        />
      ))}
    </div>
  );
};

export default FormSubTaskList;
