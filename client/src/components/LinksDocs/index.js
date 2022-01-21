import React from "react";
import { render } from "react-dom";
import LinksDocsApp from "../../LinksDocsApp.js";
import "./LinksDocs.css";
import { Fragment } from "react";

const LinksDocs = () => {
  render(
    <Fragment>
      <LinksDocsApp />
    </Fragment>,
    document.getElementById("root")
  );
};

export default LinksDocs;
