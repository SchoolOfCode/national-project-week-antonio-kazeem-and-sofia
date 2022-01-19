import { useState, useEffect } from "react";

import Header from "./Header";
import Row from "./Row";
import "./table.css";

const API_URL = process.env.REACT_APP_API_

const Contacts = () => {
  const [userData, setuserData] = useState([]);
  const [input, setInput] = useState("");
  const [inputIntrest, setInputIntrest] = useState("");
  const [data, setFetchedData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`${API_URL}/users`);
      const data = await response.json();
      setuserData(data.payload);
    }
    getData();
  }, []);

  console.log(userData);

  async function fetchData(e) {
    e.preventDefault();
    const response = await fetch(`${API_URL}/users?location=${input}`);
    const data = await response.json();
    setFetchedData(data.payload);
  }

  async function fetchIntrest(e) {
    e.preventDefault();
    const response = await fetch(`${API_URL}/users?intrest=${inputIntrest}`);
    const dataIntrest = await response.json();
    setFetchedData(dataIntrest.payload);
  }

  // useEffect(() => {
  //   fetchData();
  //   fetchIntrest();
  // });

  return (
    <>
      <h1 className="section-title">Bootcamper directory</h1>
      <div className="users-table-container">
        <form className="search">
          <label>Location</label>
          <br></br>
          <div>
            {" "}
            <input
              onClick={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <button onClick={fetchData}>Search</button>
          <label>Interest</label>
          <br></br>
          <div>
            {" "}
            <input
              onClick={(e) => {
                setInputIntrest(e.target.value);
              }}
            />
          </div>
          <button onClick={fetchIntrest}>Search</button>
        </form>
        <div>
          <Header />
          {data.map((user) => (
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

        {userData.map((user) => (
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
