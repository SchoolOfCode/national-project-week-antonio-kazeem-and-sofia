import { useState, useEffect } from "react";

import Header from "./Header";
import Row from "./Row";
import "./table.css";
// import { API_URL } from "../../../config.js";

const Contacts = () => {
  const [userData, setuserData] = useState([]);
  const [inputLocationValue, setInputLocationValue] = useState();
  const [inputInterestValue, setInputInterestValue] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://caz1.herokuapp.com/users`);
      const data = await response.json();
      setuserData(data.payload);
    }
    getData();
  }, []);

  function filterByLocation(event) {
    event.preventDefault();
    setFilter(userData.filter((data) => data.location === inputLocationValue));
  }

  function filterByInterest(event) {
    event.preventDefault();
    setFilter(userData.filter((data) => data.intrests === inputInterestValue));
  }

  return (
    <>
      <h1 className="section-title">Bootcamper directory</h1>
      <div className="user-search-form">
        <div className="search">
          <label className="search-form-input-label">
            <p>Location</p>
            <input
              onChange={(e) => {
                setInputLocationValue(e.target.value);
              }}
            />
            <button onClick={filterByLocation}>Search</button>
          </label>

          <label className="search-form-input-label">
            <p> Interest</p>
            <input
              onChange={(e) => {
                setInputInterestValue(e.target.value);
              }}
            />
            <button onClick={filterByInterest}>Search</button>
          </label>
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
    </>
  );
};

export default Contacts;
