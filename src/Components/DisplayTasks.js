import React from "react";
import "../Styles/DisplayTasks.css";
import axios from "axios";
const DisplayTasks = ({ taskData, reffunc }) => {
  return (
    <div className="task-container">
      {taskData.map((ele, index) => {
        return (
          <div className="task-capsule">
            <div
              className="task-description"
              style={{
                textDecoration: ele.isCompleted ? "line-through" : "none",
              }}
              key={ele._id}
            >
              {ele.description}
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                columnGap: "5px",
                paddingRight: "0.4rem",
              }}
            >
              <div className="complete-icon">
                <span
                  class="material-symbols-outlined"
                  onClick={async () => {
                    axios
                      .get(`http://localhost:5001/tasksComplete/${ele._id}`)
                      .then(console.log("successfully Completed"))
                      .catch((err) => console.log("Error"));
                    reffunc();
                    window.location.reload();
                  }}
                  key={ele._id}
                >
                  {ele.isCompleted ? "restart_alt" : "done"}
                </span>
              </div>
              <div className="delete-icon">
                <span
                  className="material-symbols-outlined"
                  key={ele._id}
                  onClick={() => {
                    axios
                      .get(`http://localhost:5001/tasksDelete/${ele._id}`)
                      .then(console.log("successfully Deleted"))
                      .catch((err) => console.log("Error"));
                    reffunc();
                  }}
                >
                  Delete
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTasks;
