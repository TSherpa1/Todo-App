import { SubTask } from '../../';

const SubTaskList = ({ subTasks, handleEditSubTask }) => {
  return (
    <div className="sub-task-list">
      {subTasks.map((subTask) => (
        <SubTask
          key={subTask.id}
          subTask={subTask}
          handleEditSubTask={handleEditSubTask}
        />
      ))}
    </div>
  );
};

export default SubTaskList;
