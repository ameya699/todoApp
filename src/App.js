import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import DisplayTasks from "./Components/DisplayTasks";

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <DisplayTasks />
    </div>
  );
}

export default App;
