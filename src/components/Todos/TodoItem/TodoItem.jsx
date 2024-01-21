import { TodoCard } from './TodoItem.styles';

const TodoItem = ({ todo }) => {
  return (
    <TodoCard className="todo-card">
      <p className="name">{todo.taskName}</p>
      <p className="due-date">
        Due Date: {todo.dueDate}, {todo.time}
      </p>
      <p className="priority">{todo.priority}</p>
      <p className="complexity">{todo.complexity}</p>
      <ul>
        {todo.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <button className="edit-todo">Edit</button>
      <button className="complete-todo">Complete</button>
    </TodoCard>
  );
};

export default TodoItem;
