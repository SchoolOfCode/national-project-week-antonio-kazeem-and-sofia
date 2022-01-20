import { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [randomUser] = useState([
    { id: 1, name: "Antonio Sevillano", avatar: "avatar-antonio.svg" },
    { id: 2, name: "Sofia Sanchez", avatar: "avatar-sofia.svg" }
  ]);

  function getRandomUser() {
    const random = Math.floor(Math.random() * 2) + 1;
    return randomUser.filter((user) => user.id === random);
  }

  const user = getRandomUser();

  return (
    <aside className="sidebar">
      <div className="logo">Bootcamp Tracker</div>
      <div className="avatar-sidebar">
        <img src={`${user[0].avatar}`} alt="" />
      </div>
      <h2 className="sidebar-name">{user[0].name}</h2>
      <p className="sidebar-subname">Bootcamper cohort 10</p>
      <ul className="menu">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9b59b6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          <Link to="/">
            {" "}
            <p>Home</p>
          </Link>
        </li>
        <li className="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9b59b6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <Link to="/Bootcampers">
            <p>Bootcampers</p>
          </Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9b59b6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <Link to="/Contact">
            {" "}
            <p>Contact</p>
          </Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-users"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9b59b6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
          <Link to="/1to1">
            <p>1to1</p>
          </Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-notebook"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9b59b6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
            <line x1="13" y1="8" x2="15" y2="8" />
            <line x1="13" y1="12" x2="15" y2="12" />
          </svg>
          <Link to="/Journal">
            {" "}
            <p> Journal</p>
          </Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-file-code-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9b59b6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 12h-1v5h1" />
            <path d="M14 12h1v5h-1" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          </svg>
          <Link to="/LinksDocs">
            {" "}
            <p> Links & Docs</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Nav;
