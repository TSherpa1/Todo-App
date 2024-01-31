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
      {categoryTypes.map((categoryType) => (
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

//when you check a box, the category should be added to the list of categories to be displayed
//unchecking a box will remove it from the list
//unchecking all should result in the full list being shown

//when a catergory is checked:
//need to add category to an array of categories if it doesn't already exist in the array
//loop through the array, rendering all todos with that category
