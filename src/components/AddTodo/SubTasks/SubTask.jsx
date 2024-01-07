import { useState } from 'react';
const SubTask = ({ subTask, handleEditSubTask }) => {
  const [clicked, setClicked] = useState(false);
  const [subTaskInput, setSubTaskInput] = useState(subTask.name);

  const handleSubmit = (event) => {
    console.log('submitted from subtask');
    event.preventDefault();
    handleEditSubTask(subTaskInput, subTask.id);
    setClicked(false);
  };
  return (
    <>
      <input
        value={subTaskInput}
        type="text"
        name="subTask"
        id="subTask"
        onChange={(event) => {
          setSubTaskInput(event.target.value);
        }}
        onBlur={handleSubmit}
        onClick={() => {
          setClicked(true);
        }}
      />
      {clicked ? <button onClick={handleSubmit}>Save Changes</button> : ''}
    </>
  );
};

export default SubTask;
