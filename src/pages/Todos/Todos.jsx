import { Link } from 'react-router-dom';
import { TodoList, TodoSearchForm } from '../../components/Todos';
import { TodosContainer, AddNewTaskBtn } from './Todos.styles';

const Todos = () => {
  return (
    <TodosContainer className="todos-container">
      <TodoSearchForm />
      <TodoList />
      <AddNewTaskBtn>
        <Link to="/addTodo">+ Add New Task</Link>
      </AddNewTaskBtn>
    </TodosContainer>
  );
};

export default Todos;
