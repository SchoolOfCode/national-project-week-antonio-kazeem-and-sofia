import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputJournal from "../InputJournal/Input";
import SelectJournal from "../SelectJournal/Index";
import ButtonJournal from "../ButtonJournal/Button";
import List from "../List/List";
import "./Journal.css";

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
    <div className="section">
      <h1>Bootcamp Task list</h1>
      <div className="list-container">
        <InputJournal handleInput={handleInput} inputValue={inputValue} />
        <SelectJournal handleSelect={handleSelect} />
        <ButtonJournal handleButton={handleButton} text=" Add To List" />
      </div>
      <List listTodo={listTodo} setListToDo={setListToDo} />
    </div>
  );
};

export default Journal;
