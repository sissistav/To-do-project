import './App.css';
import { useState } from 'react';
import Form from './Form';
import List from './List';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <h1 className='header'>Todo List</h1>
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
