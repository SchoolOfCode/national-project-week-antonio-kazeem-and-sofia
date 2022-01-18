import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <div className="login-container">Login Screen</div>
      <Link to="/Login">
        <button>Login</button>
      </Link>
      <Link to="/Register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Welcome;
