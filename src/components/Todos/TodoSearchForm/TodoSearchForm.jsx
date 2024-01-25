import { useState } from 'react';
import {
  SearchForm,
  SearchFormInput,
  SearchIcon,
  ArrowIcon,
} from './TodoSearchForm.styles';

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
    <SearchForm class="search-form-container" onSubmit={handleSubmit}>
      <SearchIcon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </SearchIcon>
      <SearchFormInput
        id="name"
        type="text"
        onChange={handleChange}
        value={taskName}
      />
      <ArrowIcon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </ArrowIcon>
    </SearchForm>
  );
};

export default TodoSearchForm;
