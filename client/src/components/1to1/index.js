import React from "react";
import "./1to1.css";
import { useState } from "react";

function OnetoOne() {
  const [input, setInput] = useState("");
  const [inputList, setInputList] = useState([]);

  // console.log(input);

  function handleButton() {
    setInputList([...inputList,{input}])
  }
  // console.log(inputList);

  return (
    <div>
      <h1 id="header">Welcome to your 1to1 Section</h1>
      <br></br>
      <div className="meeting-details">
        <p>Coach:Abdullahi</p>
        <p>Your next meeting is on 23/11/2021 </p>
        <p>Meeting Zoom link: </p>
      </div>

      <div className="input-field">
        Things to work on before the next meeting
        <input
          className="input-thingstodo"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button onClick={handleButton}>Add</button>
      </div>
      <div className="table">
      {inputList.map((item)=>{
        console.log(item.input)
        return <p>{item.imput}</p>
      })}
      </div>
    </div>
  );
}

export default OnetoOne;
