import Task from "./Task";

const TaskHolder = ({ tasks, onDelete, setReminder }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          setReminder={setReminder}
        />
      ))}
    </div>
  );
};

export default TaskHolder;
