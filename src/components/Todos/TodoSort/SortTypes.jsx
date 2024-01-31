import { useContext } from 'react';
import { TodoContext } from '../../../context/todoContext';
import { SortTypeList, SortListItem } from './TodoSort.styles';
const SortTypes = ({ sortingTypes, clicked }) => {
  const { sortTodos } = useContext(TodoContext);

  return (
    <SortTypeList clicked={clicked.toString()}>
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
