import { useContext } from 'react';
import { TodoContext } from '../../../context/todoContext';
import { TodoItem } from '..';
import { ListContainer } from './TodoList.styles';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  console.log('here', todos);
  return (
    <ListContainer className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  );
};

export default TodoList;
