import { TodoSortBtn, TodoSortContainer, ChevronIcon } from './TodoSort.styles';
const TodoSort = () => (
  <TodoSortContainer>
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
  </TodoSortContainer>
);

export default TodoSort;
