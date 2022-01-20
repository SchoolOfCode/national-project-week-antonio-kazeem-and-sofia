import React from "react";
import "./1to1.css";
import { useState } from "react";

function OnetoOne() {
  const [input, setInput] = useState("");


  
console.log(input);
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
        <button>Add</button>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>ggc</th>
            <th>ggg</th>
            <th>gg</th>
          </tr>
          <tr>
            <td>ggg</td>
            <td>ggf</td>
            <td>gg</td>
          </tr>
          <tr>
            <td>ggff</td>
            <td>ggff</td>
            <td>ggffff</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default OnetoOne;
