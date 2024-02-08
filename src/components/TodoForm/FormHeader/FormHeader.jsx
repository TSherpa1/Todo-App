import { Link, useNavigate } from 'react-router-dom';
import {
  TodoFormHeaderContainer,
  TodoFormHeaderText,
  BackToHomeBtn,
} from './FormHeader.styles';

const FormHeader = ({ isEditing }) => {
  const navigate = useNavigate();
  return (
    <TodoFormHeaderContainer className="add-todo-header-container">
      <BackToHomeBtn
        className="back-to-home-btn"
        onClick={() => {
          navigate('/');
        }}
      >
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

      <TodoFormHeaderText className="add-todo-header">
        {isEditing ? 'Edit Task' : 'Add New Task'}
      </TodoFormHeaderText>
    </TodoFormHeaderContainer>
  );
};

export default FormHeader;
