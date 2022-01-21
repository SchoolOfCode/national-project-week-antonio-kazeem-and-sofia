import React, { Component } from "react";
import Resources from "./components/Resources/Resources";

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
