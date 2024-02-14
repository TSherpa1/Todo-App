import { useState, useContext } from 'react';
import { SortTypes, CategoryTypes, PowerMode } from '..';
import {
  TodoSortBtn,
  TodoSortContainer,
  TodoSortInnerContainer,
  ChevronIcon,
} from './TodoSort.styles';
import { TodoContext } from '../../../context/todoContext';

const TodoSort = () => {
  const [sortClicked, setSortClicked] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);

  const { getTags, todosSubset } = useContext(TodoContext);

  const sortedTypes = [
    'Default',
    'Ascending Date',
    'Descending Date',
    'Ascending Complexity',
    'Descending Complexity',
    'Ascending Priortiy',
    'Descending Priority',
  ];

  const categoryTypes = getTags(todosSubset);

  const handleclick = (type) => {
    if (type === 'sort') {
      setSortClicked(!sortClicked);
    }
    if (type === 'filter') {
      setFilterClicked(!filterClicked);
    }
  };

  return (
    <TodoSortContainer>
      <TodoSortInnerContainer>
        <TodoSortBtn
          onClick={() => {
            handleclick('sort');
          }}
        >
          <p>Sort</p>
          <ChevronIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            clicked={sortClicked}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </ChevronIcon>
        </TodoSortBtn>
        <SortTypes sortingTypes={sortedTypes} clicked={sortClicked} />
      </TodoSortInnerContainer>
      <TodoSortInnerContainer>
        <PowerMode />
      </TodoSortInnerContainer>
      <TodoSortInnerContainer>
        <TodoSortBtn
          onClick={() => {
            handleclick('filter');
          }}
        >
          <p>Category</p>
          <ChevronIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            clicked={sortClicked}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </ChevronIcon>
        </TodoSortBtn>
        <CategoryTypes categoryTypes={categoryTypes} clicked={filterClicked} />
      </TodoSortInnerContainer>
    </TodoSortContainer>
  );
};

export default TodoSort;
