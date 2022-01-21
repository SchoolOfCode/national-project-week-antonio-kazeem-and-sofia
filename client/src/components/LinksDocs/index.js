import React from "react";
import ReactDOM from "react-dom";
import LinksDocsApp from "../../LinksDocsApp.js";
import "./LinksDocs.css";

const LinksDocs = () => {
  ReactDOM.render(
    <React.StrictMode>
      <LinksDocsApp />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default LinksDocs;
