import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Todos, AddTodo, TodoDetails } from './pages';
import { TodoProvider } from './context/todoContext';

export default function App() {
  return (
    <Router>
      <TodoProvider>
        <Routes>
          <Route exact path="/" element={<Todos />} />
          <Route path="/addTodo" element={<AddTodo />} />
          <Route path="/todo/:id" element={<TodoDetails />} />
        </Routes>
      </TodoProvider>
    </Router>
  );
}
