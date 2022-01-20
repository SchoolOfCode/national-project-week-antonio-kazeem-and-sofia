import React from "react";
import "./Row.css";

const Row = ({ name, lastname, email, location, githubuser, interest }) => {
  function generateAvatar(name, lastname) {
    return lastname === null || name === null || name === "" || lastname === ""
      ? "NA"
      : `${name[0].toUpperCase()}${lastname[0].toUpperCase()}`;
  }

  return (
    <div className="table-row">
      <div className="row">
        <div className="avatar">{generateAvatar(name, lastname)}</div>
        <div className="w-3">
          <a
            href={`https://www.github.com/${githubuser}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src="github-icon.svg" alt="Github" />
          </a>
        </div>
        <div className="w-15 bold">
          {`${name}
          ${lastname}`}
        </div>
        <div className="w-20">{email}</div>
        <div className="w-20">{location}</div>
        <div className="w-20">{interest}</div>

        <div className="button-container w-19">
          {/* <Button styles="update" text="Update" />
          <Button styles="delete" text="Delete" /> */}
        </div>
      </div>
    </div>
  );
};

export default Row;
