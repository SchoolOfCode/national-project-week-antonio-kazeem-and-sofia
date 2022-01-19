import { useState, useEffect } from "react";

import Header from "./Header";
import Row from "./Row";
import "./table.css";

const Contacts = () => {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3001/users`);
      const data = await response.json();
      setuserData(data.payload);
    }
    getData();
  }, []);

  return (
    <div>
      <div className="users-table-container">
        <Header />
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
    </div>
  );
};

export default Contacts;
