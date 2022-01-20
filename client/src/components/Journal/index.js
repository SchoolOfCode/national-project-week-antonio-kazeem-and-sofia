//Libraries
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//Components
import Input from "../Input/index";
import Select from "../Select/Index";
import Button from "../Button/Button";
import List from "../List/List";
//Styles
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
        <Input handleInput={handleInput} inputValue={inputValue} />
        <Select handleSelect={handleSelect} />
        <Button handleButton={handleButton} text=" Add To List" />
      </div>
      <List listTodo={listTodo} setListToDo={setListToDo} />
    </div>
  );
};

export default Journal;
