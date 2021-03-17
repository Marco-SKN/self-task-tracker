import Task from "./Task";

const TaskHolder = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskHolder;
