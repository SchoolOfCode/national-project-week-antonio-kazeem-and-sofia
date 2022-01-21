import React from "react";
import "./Listitem.css";

const Listitem = ({ task, id, setListToDo, listTodo, priority }) => {
  // this deletes a particular task on button click
  function deleteItem() {
    // console.log('ok');
    const filteredList = listTodo.filter((item) => {
      return item.id !== id;
    });
    setListToDo(filteredList);
    // setListToDo([...listTodo, 'test']);
  }
  return (
    <>
      <li className="task-item">
        <span className={`todo-task-label ${priority}`}>{priority}</span>
        <p className="todo-task">{task}</p>
        <p id={id} onClick={deleteItem} className="close-tag">
          X
        </p>
      </li>
    </>
  );
};

export default Listitem;
