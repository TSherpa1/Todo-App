import {
  TodoDetailsCard,
  DetailsInfo,
  InnerInfoContainer,
  SVG,
  FourArrowSVG,
  Circle,
  ProgressBarContainer,
} from './DetailsCard.styles';
import { timeConversion, dateConversion } from '../../../utils/conversions';
const DetailsCard = ({ todo }) => {
  return (
    <TodoDetailsCard
      className="todo-details-card"
      iscomplete={todo.isComplete.toString()}
    >
      <DetailsInfo className="details-info">
        <InnerInfoContainer>
          <Circle></Circle>
          <h4 className="name">{todo.taskName}</h4>
        </InnerInfoContainer>
        <InnerInfoContainer>
          <SVG
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </SVG>
          <p className="due-date">
            <span>Due Date:</span> {dateConversion(todo.dueDate)},{' '}
            {timeConversion(todo.time)}
          </p>
        </InnerInfoContainer>
        <InnerInfoContainer>
          <SVG
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
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </SVG>
          <p className="priority">
            <span>Priority: </span>
            {todo.priorityLevel} {`(${todo.priority}/10)`}
          </p>
        </InnerInfoContainer>
        <InnerInfoContainer>
          <FourArrowSVG
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
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </FourArrowSVG>
          <p className="complexity">
            <span>Complexity: </span>
            {todo.complexityLevel} {`(${todo.complexity}/10)`}
          </p>
        </InnerInfoContainer>
      </DetailsInfo>
      <ProgressBarContainer></ProgressBarContainer>
    </TodoDetailsCard>
  );
};

export default DetailsCard;
