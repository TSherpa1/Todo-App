import { useContext, useState, useEffect } from 'react';
import { TodoContext } from '../../../context/todoContext';
import { SortTypeList, SortListItem } from './TodoSort.styles';
const CategoryTypes = ({ categoryTypes, clicked }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { filterCategory } = useContext(TodoContext);

  useEffect(() => {
    filterCategory(selectedCategories);
  }, [selectedCategories]);

  const handleClick = (event) => {
    const selectedCategory = event.target.value;
    if (
      event.target.checked &&
      !selectedCategories.includes(selectedCategory)
    ) {
      setSelectedCategories([...selectedCategories, selectedCategory]);
    }
    if (!event.target.checked) {
      let filteredArray = selectedCategories.filter(
        (category) => category !== selectedCategory
      );
      setSelectedCategories(filteredArray);
    }
  };

  return (
    <SortTypeList clicked={clicked.toString()}>
      {categoryTypes &&
        categoryTypes.map((categoryType) => (
          <SortListItem key={categoryType}>
            <p>{categoryType}</p>
            <input
              type="checkbox"
              name="categoryTypes"
              value={categoryType}
              onClick={handleClick}
            />
          </SortListItem>
        ))}
    </SortTypeList>
  );
};

export default CategoryTypes;
