const List = ({todos, setTodos}) => {

    function deleteBtn(id) {
        const newTodo = todos.filter((todo) => todo.id !== id)
        setTodos(newTodo);
    }

    return (
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
    )
}

export default List;