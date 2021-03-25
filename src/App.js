import React, { useState } from "react";
import Header from "./components/Header";
import TaskHolder from "./components/TaskHolder";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskTitle: "Doctors Appt",
      date: "Feb 5th at 2.30pm",
      reminder: true,
    },
    {
      id: 2,
      taskTitle: "School meeting",
      date: "Feb 15th at 10am",
      reminder: true,
    },
    {
      id: 3,
      taskTitle: "Food shopping",
      date: "Mar 1st at 12.15pm",
      reminder: false,
    },
  ]);

  const onDelete = (selected) => {
    if (window.confirm(`Delete "${selected.taskTitle}" ?`)) {
      setTasks(tasks.filter((task) => task.id !== selected.id));
    } else return;
  };

  const setReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log("Setting reminder for id: " + id);
  };

  const showAdd = () => {
    setShowAddTask(!showAddTask);
    console.log("Set show addTask to " + !showAddTask);
  };

  const addTask = (newTask) => {
    let id = Math.floor(Math.random() * 10000);
    newTask.id = id;
    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  return (
    <div className="container">
      <Header showAdd={showAdd} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <TaskHolder
          tasks={tasks}
          onDelete={onDelete}
          setReminder={setReminder}
        />
      ) : (
        "No task to show"
      )}
    </div>
  );
};

export default App;
