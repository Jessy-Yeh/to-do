import { useState } from "react";
import Header from "./components/Header.js";
import Addtask from "./components/Addtask.js";
import TaskList from "./components/TaskList.js";

const tasks = [
  {
    text: "Walk Bao",
  },
  {
    text: "Read some books",
  },
  {
    text: "Learn coding",
  },
];

function App() {
  return (
    <>
      <Header>TO-DO APP</Header>
      <Addtask />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
