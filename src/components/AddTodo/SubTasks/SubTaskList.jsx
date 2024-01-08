import { SubTask } from '../../';

const SubTaskList = ({ subTasks }) => {
  return (
    <div className="sub-task-list">
      {subTasks.map((subTask) => (
        <SubTask key={subTask.id} subTask={subTask} />
      ))}
    </div>
  );
};

export default SubTaskList;
