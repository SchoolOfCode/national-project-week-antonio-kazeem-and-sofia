import React, { Component } from "react";
import Resources from "./components/Resources/Resources";
import "./components/LinksDocs/LinksDocs.css";

class LinksDocsApp extends Component {
  foo = () => "Bars";

  render() {
    return (
        <div className="container">
          <Resources />
        </div>
    );
  }
}

export default LinksDocsApp;
