import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Row from "./Row";
import "./table.css";
import Button from "../Button/Button";

const Contacts = () => {
  const [userData, setuserData] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3001/users`);
      const data = await response.json();
      setuserData(data.payload);
    }
    getData();
  }, []);

  function updateFilter(e) {
    setFilter(
      userData.filter(
        (data) =>
          data.location === e.target.value || data.intrests === e.target.value
      )
    );
  }

  function openModal() {
    console.log("Working!");
  }

  return (
    <>
      <h1 className="section-title">Bootcampers directory</h1>
      <div className="user-search-form">
        <div className="search">
          <label className="search-form-input-label">
            <input
              placeholder="Search for a bootcamper location or interest..."
              onChange={(e) => updateFilter(e)}
            />
          </label>
          <Link className="link-register" to="/register">
            <Button text=" Add bootcamper" handleButton={openModal} />
          </Link>
        </div>
      </div>

      <div className="users-table-container">
        <div>
          <Header />
        </div>
        {!filter || filter.length === 0
          ? userData.map((user) => (
              <Row
                key={user.userid}
                name={user.f_name}
                lastname={user.l_name}
                email={user.email}
                location={user.location}
                githubuser={user.githubuser}
                interest={user.intrests}
              />
            ))
          : filter.map((user) => (
              <Row
                key={user.userid}
                name={user.f_name}
                lastname={user.l_name}
                email={user.email}
                location={user.location}
                githubuser={user.githubuser}
                interest={user.intrests}
              />
            ))}
      </div>
      <p className="showing-users-number">
        {!filter || filter.length === 0
          ? `Showing ${userData.length} bootcampers`
          : `Showing ${filter.length} bootcampers`}
      </p>
    </>
  );
};

export default Contacts;
