import { TodoCard, TodoInfo, TodoBtns, TagsContainer } from './TodoItem.styles';

const TodoItem = ({ todo }) => {
  return (
    <TodoCard className="todo-card">
      <TodoInfo className="todo-info">
        <p className="name">{todo.taskName}</p>
        <p className="due-date">
          Due Date: {todo.dueDate}, {todo.time}
        </p>
        <p className="priority">Priority:{todo.priority}</p>
        <p className="complexity">Complexity:{todo.complexity}</p>

        <TagsContainer>
          {todo.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </TagsContainer>
      </TodoInfo>
      <TodoBtns>
        <button className="edit-todo">Edit</button>
        <button className="complete-todo">Complete</button>
      </TodoBtns>
    </TodoCard>
  );
};

export default TodoItem;
