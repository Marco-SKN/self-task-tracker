import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const [emptyText, setEmptyText] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle.trim()) {
      setEmptyText(true);
      setTaskTitle("");
      return;
    }

    addTask({ taskTitle, date, reminder });
    setTaskTitle("");
    setDate("");
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit}>
      {/*Task title input */}
      <label htmlFor="taskTitle">Task title : </label>
      <input
        type="text"
        id="taskTitle"
        value={taskTitle}
        onChange={(e) => {
          setTaskTitle(e.target.value);
          setEmptyText(false);
        }}
      />
      {emptyText && <p style={{ color: "red" }}>Task title is required</p>}

      {/*Date and Time input */}
      <br></br>
      <label htmlFor="dateTime">Date & Time : </label>
      <input
        type="text"
        id="dateTime"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/*Reminder Checkbox */}
      <br></br>
      <label htmlFor="reminder">Reminder : </label>
      <input
        type="checkbox"
        id="reminder"
        checked={reminder}
        onChange={(e) => setReminder(e.target.checked)}
      />

      <br></br>
      <br></br>
      <input type="submit" />
    </form>
  );
};

export default AddTask;
