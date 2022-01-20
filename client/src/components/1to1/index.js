import React from "react";
import "./1to1.css";
import { useState } from "react";
import Input from "../Input1to1";

function OnetoOne() {
  const [input, setInput] = useState("");
  const [inputList, setInputList] = useState([]);

  function handleButton() {
    setInputList([...inputList, { input }]);
  }

  return (
    <div>
      <h1 id="header">Welcome to your 1to1 Section</h1>
      <br></br>
      <div className="meeting-details">
        <p>Coach:Abdullahi</p>
        <p>Your next meeting is on 23/11/2021 </p>
        <p>Meeting Zoom link: </p>
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default OnetoOne;
