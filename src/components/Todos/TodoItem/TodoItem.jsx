import { useContext } from 'react';
import { TodoContext } from '../../../context/todoContext';
import {
  TodoCard,
  TodoInfo,
  TodoBtnsContainer,
  TagsContainer,
  InnerInfoContainer,
  SVG,
  FourArrowSVG,
  Circle,
  Tag,
  EditCompleteTodoSVG,
} from './TodoItem.styles';
import { timeConversion, dateConversion } from '../../../utils/conversions';

const TodoItem = ({ todo }) => {
  const { toggleComplete } = useContext(TodoContext);
  return (
    <TodoCard className="todo-card" iscomplete={todo.isComplete.toString()}>
      <TodoInfo className="todo-info">
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
        <TagsContainer>
          {todo.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </TodoInfo>
      <TodoBtnsContainer className="todo-btns-container">
        <EditCompleteTodoSVG
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 edit-todo"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </EditCompleteTodoSVG>
        <EditCompleteTodoSVG
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 toggle-complete-todo"
          onClick={() => {
            toggleComplete(todo);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </EditCompleteTodoSVG>
      </TodoBtnsContainer>
    </TodoCard>
  );
};

export default TodoItem;
