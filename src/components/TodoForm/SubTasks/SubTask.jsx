const SubTask = ({ subTask, handleRemoveSubtask }) => {
  return (
    <div className="subtask">
      <span className="subtask-name">{subTask.name}</span>
      <button
        className="remove-btn"
        onClick={() => {
          handleRemoveSubtask(subTask);
        }}
      >
        X
      </button>
    </div>
  );
};

export default SubTask;
