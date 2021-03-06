//Libraries
import React from "react";
import { useState } from "react";
import Axios from "axios";
// import cors from "cors"

//Styles
import "./register.css";
import Button from "../Button/Button";

function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [ghub, setGhub] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");

  const register = () => {
    Axios.post("https://caz1.herokuapp.com/users", {
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
    <div className="register-section-container">
      <h1 className="register-title">Register a new bootcamper</h1>
      <form className="register-form">
        <label>
          First Name
          <input
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
        </label>
        <label>
          Last Name
          <input
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
        </label>

        <label>
          Email
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Github Username
          <input
            onChange={(e) => {
              setGhub(e.target.value);
            }}
          />
        </label>
        <label>
          Password
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label>
          Location
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>

        <label>
          Interests
          <br></br>
          <input
            onChange={(e) => {
              setInterest(e.target.value);
            }}
          />
        </label>
        <Button handleButton={register} text="Add bootcamper " />
      </form>
    </div>
  );
}

export default Register;
