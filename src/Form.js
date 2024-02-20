import { useState } from 'react';

const Form = ({todos, setTodos}) => {
    const [newItem, setNewItem] = useState('');
    
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

    return (
        <form className="new-item-form" onSubmit={handleTodos}>
          <div className="form-row">
              <label htmlFor="item">New Item</label>
              <input type="text" id="item" value={newItem} onChange={handleNewItem} />
          </div>
          <button className="btn">Add</button>
      </form>
    )
}

export default Form;