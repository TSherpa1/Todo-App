import { useState, useContext } from 'react';
import { TodoContext } from '../../context/todoContext';
import { uid } from 'uid';
import { Link } from 'react-router-dom';

const AddTodo = () => {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState(null);
  const [complexity, setComplexity] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [time, setTime] = useState(null);
  const [subTasks, setSubTasks] = useState([]);
  const [tags, setTags] = useState([]);

  const { addTodo } = useContext(TodoContext);

  const createTodo = () => {
    const newTodo = {
      id: uid(),
      todoName: todoName,
      isComplete: false,
      priority: priority,
      complexity: complexity,
      dueDate: dueDate,
      time: time,
      subTasks: subTasks,
      tags: tags,
    };
    return newTodo;
  };

  const clearForm = () => {
    setTodoName('');
    setPriority(null);
    setComplexity(null);
    setDueDate(null);
    setTime(null);
    setSubTasks([]);
    setTags([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = createTodo();
    addTodo(newTodo);
    clearForm();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input
          type="text"
          value={todoName}
          onChange={(event) => {
            setTodoName(event.target.value);
          }}
        />
      </form>
      <Link to="/">Home</Link>
    </>
  );
};

export default AddTodo;
