import { useContext } from 'react';
import { TodoContext } from '../../../context/todoContext';
import { TodoItem } from '..';
import { ListContainer } from './TodoList.styles';

const TodoList = () => {
  const { todosSubset } = useContext(TodoContext);
  // console.log(todosSubset);
  return (
    <ListContainer className="todo-list">
      {todosSubset.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  );
};

export default TodoList;
