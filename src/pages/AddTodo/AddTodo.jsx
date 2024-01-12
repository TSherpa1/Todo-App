import { TodoFormComponent } from '../../components/TodoForm';
import { AddTodoContainer } from './AddTodo.styles';

const AddTodo = () => {
  return (
    <AddTodoContainer className="add-todo-container">
      <TodoFormComponent />
    </AddTodoContainer>
  );
};

export default AddTodo;
