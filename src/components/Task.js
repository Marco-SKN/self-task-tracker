// use "npm install react-icons --save" to use react-icons
import { FaTimesCircle } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className={task.reminder ? "reminder" : "task"}>
      <h3>{task.taskTitle}</h3>
      <p>
        {task.date}{" "}
        <FaTimesCircle color="red" onClick={() => onDelete(task.id)} />
      </p>
    </div>
  );
};
export default Task;
