import React, { Fragment } from "react";
// import { NavLink, Link } from "react-router-dom";
import "./LinksDocs.css";

const LinksDocs = () => {
  return (
    <Fragment>
      <h2 className="large navbar card">Helpful Links</h2>
      <section className="grid-3">
        <section>
          <p className="my-1">link 1</p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
            target="_blank"
          >
            <p className="bg-dark p">
              <strong>.filter() JavaScript</strong>
            </p>
          </a>
        </section>

        <section>
          <p className="my-1">link 2</p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
            target="_blank"
          >
            <p className="bg-dark p">
              <strong>.filter() JavaScript</strong>
            </p>
          </a>
        </section>

        <section>
          <p className="my-1">link 3</p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
            target="_blank"
          >
            <p className="bg-dark p">
              <strong>.filter() JavaScript</strong>
            </p>
          </a>
        </section>
      </section>
    </Fragment>
  );
};

export default LinksDocs;
