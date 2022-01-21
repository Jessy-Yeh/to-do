import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Addtask from "./components/Addtask.js";
import TaskList from "./components/TaskList.js";

function App() {
  function getStoredTasks() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  const [tasks, setTasks] = useState(getStoredTasks());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header>TO-DO APP</Header>
      <Addtask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
