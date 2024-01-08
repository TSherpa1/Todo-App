import { AddTodoForm } from '../../components';
import {
  AddTodoContainer,
  AddTodoHeaderContainer,
  AddTodoHeader,
  BackToHomeBtn,
} from './AddTodo.styles';

const AddTodo = () => {
  return (
    <AddTodoContainer className="add-todo-container">
      <AddTodoHeaderContainer className="add-todo-header-container">
        <BackToHomeBtn className="back-to-home-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </BackToHomeBtn>
        <AddTodoHeader className="add-todo-header">Add New Task</AddTodoHeader>
      </AddTodoHeaderContainer>
      <AddTodoForm />
    </AddTodoContainer>
  );
};

export default AddTodo;
