import Subheading from "./Subheading";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <>
      <Subheading>Tasks:</Subheading>
      <ul>
        {tasks.map((task) => (
          <Task>{task.text}</Task>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
