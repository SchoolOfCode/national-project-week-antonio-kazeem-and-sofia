import "./Input.css";

function Input({ handleInput, inputValue }) {
  return (
    <>
      <label className="input-label-journal">
        <input
          placeholder="Type here your new task"
          id="important-thing"
          className="input-journal"
          type="text"
          value={inputValue}
          onChange={handleInput}
        />
      </label>
    </>
  );
}
export default Input;
