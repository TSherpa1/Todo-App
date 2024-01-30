import { useContext } from 'react';
import { TodoContext } from '../../../context/todoContext';
import { SortTypeList, SortListItem } from './TodoSort.styles';
const SortTypes = ({ sortingTypes }) => {
  const { sortTodos } = useContext(TodoContext);
  return (
    <SortTypeList>
      {sortingTypes.map((sortType) => (
        <SortListItem key={sortType}>
          <p>{sortType}</p>
          <input
            type="radio"
            name="sortType"
            value={sortType}
            onClick={() => {
              sortTodos(sortType);
            }}
          />
        </SortListItem>
      ))}
    </SortTypeList>
  );
};

export default SortTypes;
