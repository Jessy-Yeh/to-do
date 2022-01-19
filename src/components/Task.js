function Task({ children }) {
  return (
    <li className="task-container task">
      <p>{children}</p>
      <button className="cross-btn">
        <img className="button-icon" src="img/cross.jpeg"></img>
      </button>
    </li>
  );
}
export default Task;
