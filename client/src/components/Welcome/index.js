import React from "react";
import "./welcome.css";

import LoginButton from "../LoginButton";

function Welcome() {
  return (
    <div className="welcome">
    <h1 className="huddle-header">Welcome to your Bootcamper Huddle</h1>
      <div>Login Screen</div>
      <div>
        <LoginButton />
      </div>
    </div>
  );
}

export default Welcome;
