import React from "react";
import Listitem from "./Listitem";
import "./List.css";


function List({ listTodo, setListToDo }) {
  return (
    <>
    
      <div className="ol-container">
        <ol>
          {listTodo.map((item) => {
            return (
              <Listitem
                task={item.task}
                key={item.id}
                id={item.id}
                setListToDo={setListToDo}
                listTodo={listTodo}
                priority={item.priority}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default List;
