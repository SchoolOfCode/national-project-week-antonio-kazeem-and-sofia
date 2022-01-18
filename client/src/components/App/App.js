
import "./App.css";
import Welcome from "../Welcome";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
