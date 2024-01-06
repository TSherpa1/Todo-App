const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <p className="todo-name">{todo.todoName}</p>
      <button className="remove-todo">Remove</button>
    </div>
  );
};

export default TodoItem;
