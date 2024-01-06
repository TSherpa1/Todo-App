import { useContext } from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoItem } from './';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
