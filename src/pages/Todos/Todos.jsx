import { Link } from 'react-router-dom';
import { TodoList, TodoSearchForm } from '../../components/Todos';

const Todos = () => {
  return (
    <div className="todos-container">
      <Link to="/addTodo">Add Todo</Link>
      <TodoSearchForm />
      <TodoList />
    </div>
  );
};

export default Todos;
