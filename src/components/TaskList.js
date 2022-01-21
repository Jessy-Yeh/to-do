import Subheading from "./Subheading";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  return (
    <>
      <Subheading>Tasks:</Subheading>
      {tasks.length ? (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <Task setTasks={setTasks} index={index}>
              {task}
            </Task>
          ))}
        </ul>
      ) : (
        <p className="notask">No task</p>
      )}
    </>
  );
}

export default TaskList;
