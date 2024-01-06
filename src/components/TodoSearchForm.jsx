import { useState } from 'react';

const TodoSearchForm = () => {
  const [taskName, setTaskName] = useState('');

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Search</label>
      <input id="name" type="text" onChange={handleChange} value={taskName} />
    </form>
  );
};

export default TodoSearchForm;
