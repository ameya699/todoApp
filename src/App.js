import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import DisplayTasks from "./Components/DisplayTasks";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5001/`)
      .then((res) => setTask(res.data))
      .catch((err) => console.log(err));
  }, []);

  const refreshData = () => {
    axios
      .get(`http://localhost:5001/`)
      .then((res) => setTask(res.data))
      .catch((err) => console.log(err));
  };
  console.log(tasks);
  return (
    <div>
      <Navbar />
      <MainPage refreshfunc={refreshData} />
      <DisplayTasks taskData={tasks} reffunc={refreshData} />
    </div>
  );
}

export default App;
