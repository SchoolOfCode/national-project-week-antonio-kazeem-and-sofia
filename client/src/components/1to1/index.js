import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputJournal from "../Input1to1/";
import SelectJournal from "../Select1to1";
import ButtonJournal from "../Button1to1";
import List from "../List1to1";
import "./1to1.css";

const Journal = () => {
  const [listTodo, setListToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("Low");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

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

  function reset() {
    setInputValue("");
  }

  function handleSelect(e) {
    setSelectValue(e.target.value);
  }

  return (
    <div>
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
              <a href="mailto:email@example.com"> Kazeem.alatishe@yahoo.com</a>
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
  );
};

export default Journal;
