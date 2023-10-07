import React from "react";
import "../Styles/DisplayTasks.css";
const DisplayTasks = () => {
  const arr = ["eat eggs", "workout", "play basket ball", "play cricket"];
  const handleComplete = () => {};
  const handleDelete = () => {};
  return (
    <div className="task-container">
      {arr.map((ele, index) => {
        return (
          <div className="task-capsule">
            <div className="task-description">{ele}</div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                columnGap: "5px",
                paddingRight: "0.4rem",
              }}
            >
              <div className="complete-icon" onClick={handleComplete}>
                <span class="material-symbols-outlined">done</span>
              </div>
              <div className="delete-icon" onClick={handleDelete}>
                <span className="material-symbols-outlined">Delete</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTasks;
