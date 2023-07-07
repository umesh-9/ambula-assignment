import React, { useState } from "react";

function TodoList() {
  // State for storing tasks
  const [tasks, setTasks] = useState([]);
  // State for capturing new task input
  const [newTask, setNewTask] = useState("");

  // Event handler for input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Event handler for adding a new task
  const handleAddTask = () => {
    if (newTask.trim() === "") return; // Skip if input is empty
    const updatedTasks = [
      ...tasks,
      { id: Date.now(), text: newTask, completed: false },
    ];
    setTasks(updatedTasks);
    setNewTask("");
  };

  // Event handler for toggling task completion
  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Event handler for removing a task
  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Calculate total tasks and completed tasks
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="container sm:w-[60%] mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <div className="mb-4">
        <input
          type="text"
          className="w-full rounded border outline-none px-4 py-2"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 mt-2 rounded ml-2"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              className="mr-2"
            />
            <span>{task.text}</span>
            <button
              onClick={() => handleRemoveTask(task.id)}
              className="text-red-500 hover:text-red-600 ml-auto"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        Total tasks: {totalTasks}
        <br />
        Completed tasks: {completedTasks}
      </div>
    </div>
  );
}

export default TodoList;
