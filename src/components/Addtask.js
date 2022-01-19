import Subheading from "./Subheading.js";

function Addtask() {
  return (
    <>
      <Subheading>Add new:</Subheading>
      <div className="task-container add-task">
        <input className="input" type="text" />
        <button>
          <img className="button-icon" src="img/tick.png"></img>
        </button>
      </div>
    </>
  );
}

export default Addtask;
