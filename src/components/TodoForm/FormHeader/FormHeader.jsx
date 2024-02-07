import { Link } from 'react-router-dom';
import {
  TodoFormHeaderContainer,
  TodoFormHeaderText,
  BackToHomeBtn,
} from './FormHeader.styles';

const FormHeader = ({ isEditing }) => (
  <TodoFormHeaderContainer className="add-todo-header-container">
    <BackToHomeBtn className="back-to-home-btn">
      <Link to="/">
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
      </Link>
    </BackToHomeBtn>
    <TodoFormHeaderText className="add-todo-header">
      {isEditing ? 'Edit Task' : 'Add New Task'}
    </TodoFormHeaderText>
  </TodoFormHeaderContainer>
);

export default FormHeader;
