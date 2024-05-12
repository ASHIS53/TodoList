import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoRow from './TodoRow';
import Button from './Button';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [fontSize, setFontSize] = useState(16); // Initial font size
  const initialFontSize = 16; // Initial font size

  const addTodo = (text) => {
    setTodos([
      { id: Date.now(), text, completed: false },
      ...todos,
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => prevSize - 1); // Decrease font size by 1
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 1); // Increase font size by 1
  };

  const resetFontSize = () => {
    setFontSize(initialFontSize); // Reset font size to initial value
  };

  const handleAddTodo = () => {
    const input = document.querySelector('input[type="text"]');
    if (input.value.trim()) {
      addTodo(input.value.trim());
      input.value = ''; // Clear input field after adding
    }
  };

  return (
    <div className="contain">
      <div style={{ fontSize: `${fontSize}px` }}>
        <div className="d-flex justify-content-between cont">
          <div className="button">
            <ul className='list-unstyled'>
              <li className='mb-3'>
                <Button variant="big" onClick={increaseFontSize} className="big-button">
                  Big
                </Button>
              </li>
              <li className='mb-3'>
                <Button variant="small" onClick={decreaseFontSize} className="small-button">
                  Small
                </Button>
              </li>
              <li>
                <Button variant="small" onClick={resetFontSize} className="reset-button">
                  Reset
                </Button>
              </li>
            </ul>
          </div>
          <div className="container">
            <h1>Todo List</h1>
            <div className="d-flex justify-content-between mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Add a new todo"
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleAddTodo();
                  }
                }}
              />
              <Button onClick={handleAddTodo}>Add</Button>
            </div>
            {todos.length > 0 ? (
              <ul className="list-group">
                {todos.map((todo) => (
                  <TodoRow
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteTodo}
                  />
                ))}
              </ul>
            ) : (
              <p>No todos yet!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
