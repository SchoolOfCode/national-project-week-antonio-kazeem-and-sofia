import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const linksDocs = () => {
  return (
    <Router>
      <Fragment>
        <div>
          <h2>Helpful Links</h2>
          <p className="my-1">link 1</p>
          <p className="bg-dark p">
            <strong>link 1</strong>
          </p>
          <Route
            exact
            path=""
            component={() => {
              window.location.href =
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter";
              // return null;
            }}
          />
        </div>
      </Fragment>
    </Router>
  );
};

export default linksDocs;
