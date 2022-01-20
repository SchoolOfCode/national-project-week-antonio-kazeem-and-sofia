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
      <div>
        <h1 className="section">Your 1-1 Section</h1>
        <div className="meeting-details">
          <p className="coach">Coach: Kazeem Alat</p>
          <p className="coach">
            Email: <a href="mailto:email@example.com"> Kazeem.alatishe@yahoo.com</a>
          </p>
          <p className="coach">Your next meeting is on 23/11/2021</p>
          <p className="coach">
            Zoom link:{" "}
            <a href="https://schoolofcode.zoom.us/j/85444009034">
              {" "}
              https://schoolofcode.zoom.us/j/85444009034
            </a>
          </p>
        </div>
      </div>
      <div className="section">
        <p className="things section">Things to do before the next meeting</p>
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
