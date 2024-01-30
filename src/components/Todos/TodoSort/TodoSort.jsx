import { useContext } from 'react';
import { SortType } from '..';
import {
  TodoSortBtn,
  TodoSortContainer,
  TodoSortInnerContainer,
  ChevronIcon,
} from './TodoSort.styles';
import { TodoContext } from '../../../context/todoContext';

const TodoSort = () => {
  const { sortTodos } = useContext(TodoContext);
  const sortedTypes = [
    'Default',
    'Ascending Date',
    'Descending Date',
    'Ascending Complexity',
    'Descending Complexity',
    'Ascending Priortiy',
    'Descending Priority',
  ];

  const categoryTypes = ['hello'];
  return (
    <TodoSortContainer>
      <TodoSortInnerContainer>
        <TodoSortBtn>
          <p>Sort</p>
          <ChevronIcon
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </ChevronIcon>
        </TodoSortBtn>
        <SortType sortingTypes={sortedTypes} />
      </TodoSortInnerContainer>
      <TodoSortInnerContainer>
        <TodoSortBtn>
          <p>Filter</p>
          <ChevronIcon
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </ChevronIcon>
        </TodoSortBtn>
        <SortType sortingTypes={categoryTypes} />
      </TodoSortInnerContainer>
    </TodoSortContainer>
  );
};

export default TodoSort;
