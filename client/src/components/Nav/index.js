import { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LogOutButton";

function Nav() {
  const [randomUser] = useState([
    { id: 1, name: "Antonio Sevillano", avatar: "avatar-antonio.svg" },
    { id: 2, name: "Sofia Sanchez", avatar: "avatar-sofia.svg" },
    { id: 3, name: "Corneliu Laur", avatar: "avatar-corneliu.svg" },
    { id: 4, name: "Kazeem Alatishe", avatar: "avatar-kazeem.svg" }
  ]);

  function getRandomUser() {
    const random = Math.floor(Math.random() * 4) + 1;
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
          <NavLink to="/Home">
            <img src="./home.svg" alt="Home" />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Bootcampers">
            <img src="./bootcampers.svg" alt="Bootcampers icon" />
            <p>Bootcampers</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/1to1">
            <img src="./1to1.svg" alt="1to1" />
            <p>1to1</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Journal">
            <img src="./journal.svg" alt="Journal" />
            <p> Journal</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/LinksDocs">
            <img src="./linkdocs.svg" alt="link and docs" />
            <p> Links & Docs</p>
          </NavLink>
        </li>
        <l>
          <LogoutButton/>
        </l>
      </ul>
    </aside>
  );
}

export default Nav;
