import React, { useState } from "react";

const TodoAppPractice = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Todo List Practice</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="px-4 py-2 border rounded-l-lg focus:outline-none"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet</p>
        ) : (
          tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white px-4 py-2 mb-2 rounded shadow"
            >
              <span>{t}</span>
              <button
                onClick={() => removeTask(index)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoAppPractice;
