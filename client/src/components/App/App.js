import "./App.css";
import Nav from "../Nav/index";
import { Route, Routes } from "react-router-dom";
import Table from "../Table/index";
import  Home  from "../Home/index.js";
import OnetoOne from "../1to1"
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bootcampers" element={<Table />} />
          <Route path="/Contact" />
          <Route path="/1to1" element={<OnetoOne />} />
          <Route path="/Journal" />
          <Route path="/Link&Doc"/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
