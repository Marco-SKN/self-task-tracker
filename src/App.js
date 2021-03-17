import React, { useState } from "react";
import Header from "./components/Header";
import TaskHolder from "./components/TaskHolder";

const App = () => {
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

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <TaskHolder tasks={tasks} onDelete={onDelete} />
      ) : (
        "No task to show"
      )}
    </div>
  );
};

export default App;
