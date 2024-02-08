import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  LabelSpan,
  DateSpan,
} from './TodoItem.styles';
import { timeConversion, dateConversion } from '../../../utils/conversions';

const TodoItem = ({ todo }) => {
  const [clicked, setClicked] = useState(todo.isComplete);
  const { toggleComplete, getColorDate } = useContext(TodoContext);
  const navigate = useNavigate();
  console.log(todo);
  return (
    <TodoCard
      className="todo-card"
      clicked={clicked ? '#e7f5ff' : 'white'}
      onClick={() => {
        navigate(`./todo/${todo.id}`);
      }}
    >
      <TodoInfo className="todo-info">
        <InnerInfoContainer>
          <Circle datecolor={getColorDate(todo)}></Circle>
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
            <LabelSpan>Due Date:</LabelSpan>{' '}
            <DateSpan datecolor={getColorDate(todo)}>
              {dateConversion(todo.dueDate)}, {timeConversion(todo.time)}
            </DateSpan>
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
            <LabelSpan>Priority: </LabelSpan>
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
            <LabelSpan>Complexity: </LabelSpan>
            {todo.complexityLevel} {`(${todo.complexity}/10)`}
          </p>
        </InnerInfoContainer>
        <TagsContainer>
          {todo.tags && todo.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
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
          onClick={(event) => {
            event.stopPropagation();
            navigate(`./editTodo/${todo.id}`);
          }}
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
          onClick={(event) => {
            event.stopPropagation();
            toggleComplete(todo);
            setClicked(!clicked);
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
