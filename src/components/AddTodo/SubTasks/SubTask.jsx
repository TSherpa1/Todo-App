const SubTask = ({ subTask }) => {
  return (
    <div className="subtask">
      <span className="subtask-name">{subTask.name}</span>
      <button className="remove-btn">X</button>
    </div>
  );
};

export default SubTask;
