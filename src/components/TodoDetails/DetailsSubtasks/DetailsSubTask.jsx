import { useContext } from 'react';
import { TodoContext } from '../../../context/todoContext';
import {
  SubTaskItemContainer,
  SubTaskItem,
  SubTaskCompleteBtn,
  CompleteSVG,
} from './DetailsSubTasks.styles';

const DetailsSubTask = ({ subTask, number }) => {
  const { completeSubTask } = useContext(TodoContext);
  return (
    <SubTaskItemContainer className="subtask-container">
      <SubTaskItem
        onClick={() => completeSubTask(subTask)}
      >{`${number}. ${subTask.name}`}</SubTaskItem>
      <SubTaskCompleteBtn
        onClick={() => completeSubTask(subTask)}
        iscomplete={subTask.isComplete.toString()}
      >
        <CompleteSVG
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </CompleteSVG>
      </SubTaskCompleteBtn>
    </SubTaskItemContainer>
  );
};

export default DetailsSubTask;
