import React from "react";
import { useState } from "react";
import Axios from "axios";
// import cors from "cors"

function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [ghub, setGhub] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/users", {
      fname: fname,
      lname: lname,
      email: email,
      githubuser: ghub,
      password: password,
      location: location,
      intrests: interest
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <form>
      <label>First Name</label>
      <br></br>
      <input
        onChange={(e) => {
          setFname(e.target.value);
        }}
      />
      <br></br>
      <br></br>

      <label>Last Name</label>
      <br></br>
      <input
        onChange={(e) => {
          setLname(e.target.value);
        }}
      />
      <br></br>
      <br></br>

      <label>Email</label>
      <br></br>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br></br>
      <br></br>

      <label>Github Username</label>
      <br></br>
      <input
        onChange={(e) => {
          setGhub(e.target.value);
        }}
      />
      <br></br>
      <br></br>

      <label>Password</label>
      <br></br>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br></br>
      <br></br>

      <label>Location</label>
      <br></br>
      <input
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <br></br>
      <br></br>

      <label>Interests</label>
      <br></br>
      <input
        onChange={(e) => {
          setInterest(e.target.value);
        }}
      />
      <br></br>
      <br></br>

      <button onClick={register}>Submit</button>
    </form>
  );
}

export default Register;
