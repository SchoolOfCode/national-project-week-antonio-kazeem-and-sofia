import React from 'react';
import Button from '../../Button';
import './Row.css';

const Row = ({ name, lastname, email, location, githubuser, interest }) => {
  function generateAvatar(name, lastname) {
    if (lastname === null || name === null) {
      return 'NA';
    }

    return `${name[0].toUpperCase()}${lastname[0].toUpperCase()}`;
  }

  return (
    <div className="table-row">
      <div className="row">
        <div className="w-3  avatar">{generateAvatar(name, lastname)}</div>
        <div className="w-3">
          <img src="github-icon.svg" alt="Github" />
        </div>
        <div className="w-15 bold">
          {`${name}
          ${lastname}`}
        </div>
        <div className="w-20">{email}</div>
        <div className="w-20">{location}</div>
        <div className="w-20">{interest}</div>

        <div className="button-container w-19">
          <Button styles="update" text="Update" />
          <Button styles="delete" text="Delete" />
        </div>
      </div>
    </div>
  );
};

export default Row;
