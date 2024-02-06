import { useEffect } from 'react';
import { TodoFormComponent } from '../../components/TodoForm';
import { AddTodoContainer } from './AddTodo.styles';

const AddTodo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AddTodoContainer className="add-todo-container">
      <TodoFormComponent />
    </AddTodoContainer>
  );
};

export default AddTodo;
