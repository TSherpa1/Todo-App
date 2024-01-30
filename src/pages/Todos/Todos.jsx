import { Link } from 'react-router-dom';
import { TodoList, TodoSearchForm, TodoSort } from '../../components/Todos';
import { TodosContainer, AddNewTaskBtn } from './Todos.styles';

const Todos = () => {
  return (
    <TodosContainer className="todos-container">
      <TodoSearchForm />
      <TodoSort />
      <TodoList />
      <Link to="/addTodo">
        <AddNewTaskBtn>+ Add New Task</AddNewTaskBtn>
      </Link>
    </TodosContainer>
  );
};

export default Todos;
