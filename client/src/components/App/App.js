import "./App.css";
import Nav from "../Nav/index";
import { Route, Routes } from "react-router-dom";
import Table from "../Table/index";
import Home from "../Home/index.js";
import OnetoOne from "../1to1";
import LinksDocs from "../LinksDocs/index.js";
import Journal from "../Journal";
import Register from "../Register";

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
          <Route path="/Journal" element={<Journal />} />
          <Route path="/LinksDocs" element={<LinksDocs />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
