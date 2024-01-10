const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <p className="todo-name">{todo.todoName}</p>
      <button className="remove-todo">X</button>
    </div>
  );
};

export default TodoItem;
