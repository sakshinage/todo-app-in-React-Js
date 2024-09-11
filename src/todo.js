import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]); // Stores the list of tasks
  const [input, setInput] = useState(''); // Stores the current input value

  const addTodo = () => {
    if (input.trim()) { // Checks if input is not empty
      setTodos([...todos, input]); // Adds the new task to the existing list
      setInput(''); // Clears the input field
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Removes the selected task
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

  