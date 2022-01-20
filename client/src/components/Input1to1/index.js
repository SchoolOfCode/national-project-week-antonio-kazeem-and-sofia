import { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  const [inputvalue, setInputvalue] = useState("")

  function handleChange(e) {
   setInput(e.target.value)
  }

  function handleClick(e) {
   setInputvalue(input)
  }

  console.log(inputvalue);

  return (
    <div>
      <input onChange={handleChange} />

      <button onClick={handleClick}>Add a task</button>
    </div>
  );
}

export default Input;
