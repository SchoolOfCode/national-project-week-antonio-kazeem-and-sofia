import "./App.css";
import Nav from "../Nav/index";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Table from "../Table/index";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/contacts" element={<Table />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
