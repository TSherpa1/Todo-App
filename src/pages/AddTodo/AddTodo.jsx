import { Link } from 'react-router-dom';
import { AddTodoForm } from '../../components';
const AddTodo = () => {
  return (
    <>
      <AddTodoForm />
      <Link to="/">Home</Link>
    </>
  );
};

export default AddTodo;
