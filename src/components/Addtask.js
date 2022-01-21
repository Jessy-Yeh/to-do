import Subheading from "./Subheading.js";
import { useState, useRef } from "react";

function Addtask({ setTasks }) {
  const [newTaskText, setNewTaskText] = useState("");
  const inputRef = useRef();

  function addNewTaskToList() {
    if (newTaskText) {
      setTasks((prevTasks) => [...prevTasks, newTaskText]);
      setNewTaskText("");
      inputRef.current.focus();
    }
  }

  function handleInput(event) {
    setNewTaskText(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addNewTaskToList();
    }
  }

  return (
    <>
      <Subheading>Add new:</Subheading>
      <div className="task-container add-task">
        <input
          className="input"
          type="text"
          value={newTaskText}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
          ref={inputRef}
          autoFocus
        />
        <button onClick={addNewTaskToList} className="btn tick-btn">
          <img className="button-icon" src="img/tick1.png"></img>
        </button>
      </div>
    </>
  );
}

export default Addtask;
