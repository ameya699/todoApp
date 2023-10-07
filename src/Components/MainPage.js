import React, { useEffect, useState } from "react";
import "../Styles/MainPage.css";
import axios from "axios";

const MainPage = ({ reffunc }) => {
  const [currvalue, setcurrvalue] = useState("");

  const handleChange = (e) => {
    setcurrvalue(e.target.value);
  };

  const handleSubmit = async (e) => {
    //logic to post to api for inserting task into db
    if (currvalue.trim().length > 0) {
      axios
        .get(`http://localhost:5001/tasks/${currvalue}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      await reffunc;
    }
  };

  return (
    <div className="mainpagelayout">
      <form
        onSubmit={handleSubmit}
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
          required
          value={currvalue}
          onChange={handleChange}
          placeholder="New Task"
        />
        <button
          type="submit"
          style={{
            outline: "none",
            borderRadius: "15px",
            minWidth: "142px",
            minHeight: "32px",
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default MainPage;
