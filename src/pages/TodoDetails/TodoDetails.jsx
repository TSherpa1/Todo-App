import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TodoContext } from '../../context/todoContext';
import { DetailsComponent } from '../../components/TodoDetails';
import { TodoDetailsContainer } from './TodoDetails.styles';
const TodoDetails = () => {
  const { todoId } = useParams();
  const { getTodo, todos } = useContext(TodoContext);
  let todo = getTodo(todoId, todos);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TodoDetailsContainer className="todo-details-container">
      <DetailsComponent todo={todo} />
    </TodoDetailsContainer>
  );
};

export default TodoDetails;
