import { DetailsSubTask } from '../';
import {
  DetailsSubTaskListContainer,
  DetailSubTaskListHeader,
} from './DetailsSubTasks.styles';
const DetailsSubTaskList = ({ subTasks }) => {
  return (
    <DetailsSubTaskListContainer className="details-subtask-list-container">
      <DetailSubTaskListHeader>Checklist for Subtasks</DetailSubTaskListHeader>
      {subTasks.map((subTask, i) => (
        <DetailsSubTask key={subTask.id} number={i + 1} subTask={subTask} />
      ))}
    </DetailsSubTaskListContainer>
  );
};

export default DetailsSubTaskList;
