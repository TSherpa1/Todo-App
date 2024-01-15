const FormSubTask = ({ subTask, handleRemoveSubtask }) => {
  console.log(subTask);
  return (
    <div className="subtask">
      <input
        type="text"
        name="subtask-input"
        id="subtask-input"
        value={subTask.name}
        // onChange={handleSubTaskChange}
      />
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

export default FormSubTask;
