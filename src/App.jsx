import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Todos, AddTodo, TodoDetails } from './pages';
import { TodoProvider } from './context/todoContext';
import { GlobalStyle } from '../Global.styles';
import { AppContainer } from '../App.styles';

export default function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <TodoProvider>
          <Routes>
            <Route exact path="/" element={<Todos />} />
            <Route path="/addTodo" element={<AddTodo />} />
            <Route path="/todo/:id" element={<TodoDetails />} />
          </Routes>
        </TodoProvider>
      </AppContainer>
    </Router>
  );
}
