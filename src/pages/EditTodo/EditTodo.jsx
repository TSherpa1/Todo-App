import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TodoContext } from '../../context/todoContext';
import { TodoFormComponent } from '../../components/TodoForm';
import { EditTodoContainer } from './EditTodo.styles';

const EditTodo = () => {
  const { todoId } = useParams();
  const { getTodo, todos } = useContext(TodoContext);
  let todo = getTodo(todoId, todos);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <EditTodoContainer className="edit-todo-container">
      <TodoFormComponent todo={todo} isEditing={true} />
    </EditTodoContainer>
  );
};

export default EditTodo;
