import React from "react";
import "./Button.css";

function Button({ handleButton, text }) {
  return (
    <>
      <button
        onClick={handleButton}
        id="add-to-list"
        className="add-to-list-button"
      >
        <img src="add-icon.svg" alt="Add" />
        {text}
      </button>
    </>
  );
}

export default Button;
