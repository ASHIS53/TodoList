import React, { useState } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';


const TodoRow = ({ todo, onToggleComplete, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleComplete = () => onToggleComplete(todo.id);
  const handleDelete = () => onDelete(todo.id);

  return (
    <div
      className={`todo-row d-flex align-items-center ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="d-flex align-items-center flex-grow-1">
        <Checkbox label="" isChecked={todo.completed} onChange={handleToggleComplete} />
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      {isHovered && (
        <div>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default TodoRow;
