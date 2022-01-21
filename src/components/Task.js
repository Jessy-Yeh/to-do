import { useState } from "react";

function Task({ children = "No task", setTasks, index }) {
  function removeTask() {
    setTasks((prevTasks) => prevTasks.filter((el, i) => i !== index));
  }
  return (
    <li className="task-container task">
      <p>{children}</p>
      <button className="btn cross-btn" onClick={removeTask}>
        <img className="button-icon" src="img/cross.png"></img>
      </button>
    </li>
  );
}
export default Task;
