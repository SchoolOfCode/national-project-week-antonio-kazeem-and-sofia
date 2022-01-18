import React from 'react';
import Button from '../../Button';
import './Row.css';

const Row = () => {
  return (
    <div className="table-row">
      <div className="row">
        <div className="w-3  avatar">AS</div>
        <div className="w-3">
          <img src="github-icon.svg" alt="Github" />
        </div>
        <div className="w-15 bold">Antonio Sevillano</div>
        <div className="w-20">antonio@antonio.com</div>
        <div className="w-20">Newcastle upon tyne</div>
        <div className="w-20">Astronomy</div>

        <div className="button-container w-19">
          <Button styles="update" text="Update" />
          <Button styles="delete" text="Delete" />
        </div>
      </div>
    </div>
  );
};

export default Row;
