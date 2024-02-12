import { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  function handleNewItem(e) {
    setNewItem(e.target.value);
  }

  function handleTodos(e) {
    e.preventDefault();
    if(newItem) {
      setTodos([...todos, {
        id: crypto.randomUUID(),
        title: newItem
      }]);
      setNewItem('');
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function deleteBtn(id) {
    const newTodo = todos.filter((todo) => todo.id !== id)
    setTodos(newTodo);
  }

  return (
    <div>
      <form className="new-item-form" onSubmit={handleTodos}>
          <div className="form-row">
              <label htmlFor="item">New Item</label>
              <input type="text" id="item" value={newItem} onChange={handleNewItem} />
          </div>
          <button className="btn">Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
        <ul className='list'>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <label>
                    <input type='checkbox' />
                    {todo.title}
                </label>
                <button className='btn btn-danger' onClick={() => deleteBtn(todo.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
    </div>
  );
}

export default App;
