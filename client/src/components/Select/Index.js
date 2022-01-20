import React from "react";

function Index({ handleSelect }) {
  return (
    <>
      <label className="select-label-journal">
        <select
          className="journal-select"
          name="priority"
          id="priority"
          onChange={handleSelect}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
    </>
  );
}

export default Index;
