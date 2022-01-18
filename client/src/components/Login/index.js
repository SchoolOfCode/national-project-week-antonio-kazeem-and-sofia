import React from "react";
import { useState } from "react";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [loginstatus, setLoginStatus] = useState();


  const login = (e) => {
   e.preventDefault()
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password
    }).then((res) => {
      console.log(res.data);
    });
  };


  return (
    <div>
      <label>Email</label>
      <br></br>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />

      <label>Password</label>
      <br></br>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />

      <button onClick={login}>Submit</button>
    </div>
  );
}

export default Login;
