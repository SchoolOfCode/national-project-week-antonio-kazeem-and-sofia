// packages imported
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import InputJournal from "../Input1to1/";
import SelectJournal from "../Select1to1";
import ButtonJournal from "../Button1to1";
import List from "../List1to1";
import "./1to1.css";
import Nav from "../Nav";

const Journal = () => {
  // useState hook was used to set the states for the listtodo, inputvalue and selectvalue
  const [listTodo, setListToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("Low");

  // this function sets the input into the inputfield
  function handleInput(e) {
    setInputValue(e.target.value);
  }

  // this function rerenders the todolist on click of the button
  function handleButton() {
    setListToDo([
      ...listTodo,
      {
        id: uuidv4(),
        task: inputValue,
        priority: selectValue,
        assigned: "name"
      }
    ]);
    reset();
  }

  // this resets the input field
  function reset() {
    setInputValue("");
  }

  // this selects the value in the priority field
  function handleSelect(e) {
    setSelectValue(e.target.value);
  }

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="others">
        <div className="onetoone-container">
          <h1>Your 1-1 Section</h1>
          <div className="meeting-details">
            <img
              className="avatar-onetoone"
              src="avatar-kazeem.svg"
              alt="avatar"
            />
            <div className="card-meeting-text">
              <p>
                Coach: <span className="coach-name">Kazeem Alat</span>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:email@example.com">
                  {" "}
                  Kazeem.alatishe@yahoo.com
                </a>
              </p>
              <p>
                Your next meeting is on{" "}
                <span className="meeting-date"> 23/11/2021</span>
              </p>
              <p>
                Zoom link:{" "}
                <a href="https://schoolofcode.zoom.us/j/85444009034">
                  {" "}
                  https://schoolofcode.zoom.us/j/85444009034
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <h3 className="things-to-do-title">
            Things to do before the next meeting
          </h3>
          <div className="list-container">
            <InputJournal handleInput={handleInput} inputValue={inputValue} />
            <SelectJournal handleSelect={handleSelect} />
            <ButtonJournal handleButton={handleButton} />
          </div>
          <List listTodo={listTodo} setListToDo={setListToDo} />
        </div>
      </div>
    </>
  );
};

export default Journal;
