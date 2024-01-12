import { SubTask } from '../';

const SubTaskList = ({ subTasks, handleRemoveSubTask }) => {
  return (
    <div className="sub-task-list">
      {subTasks.map((subTask) => (
        <SubTask
          key={subTask.id}
          subTask={subTask}
          handleRemoveSubtask={handleRemoveSubTask}
        />
      ))}
    </div>
  );
};

export default SubTaskList;
