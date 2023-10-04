import React, { useState } from "react";
import "../Styles/MainPage.css";
import newtask from "../Images/newtask.png";
const MainPage = () => {
  const [currvalue, setcurrvalue] = useState("");
  const handleChange = (e) => {
    setcurrvalue(e.target.value);
  };
  const handleSubmit = (e) => {
    let taskContent = currvalue;
    //logic to post to api for inserting data into db
  };

  return (
    <div className="mainpagelayout">
      <form
        onSubmit={() => alert("submitted")}
        style={{
          display: "flex",
          justifyContent: "center",
          columnGap: "2rem",
          flexWrap: "wrap",
          rowGap: "2rem",
        }}
      >
        <input
          type="text"
          className="create-tasks"
          value={currvalue}
          onChange={handleChange}
          placeholder="New Task"
        />
        <button type="submit" style={{ outline: "none", borderRadius: "15px" }}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default MainPage;
