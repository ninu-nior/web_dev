// src/Todo.js
import React, { useState } from 'react';
import './todo.css'; // Import CSS for styling

function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task.trim()]);
      setTask('');
    } else {
      alert('Please enter a task!');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <span className="delete" onClick={() => deleteTask(index)}> ❌</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
