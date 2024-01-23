import { useState } from 'react';
import { SearchForm, SearchFormInput } from './TodoSearchForm.styles';

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
    <SearchForm onSubmit={handleSubmit}>
      <label htmlFor="name">Search</label>
      <SearchFormInput
        id="name"
        type="text"
        onChange={handleChange}
        value={taskName}
      />
    </SearchForm>
  );
};

export default TodoSearchForm;
