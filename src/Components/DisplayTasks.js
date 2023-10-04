import React from "react";
import "../Styles/DisplayTasks.css";
const DisplayTasks = () => {
  const arr = ["eat eggs", "workout", "play basket ball", "play cricket"];
  return (
    <div className="task-container">
      {arr.map((ele, index) => {
        return (
          <div className="task-capsule">
            <div className="task-description">{ele}</div>
            <div className="delete-icon">
              <span className="material-symbols-outlined">Delete</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTasks;