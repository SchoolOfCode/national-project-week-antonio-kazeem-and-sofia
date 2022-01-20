import React, { Fragment } from "react";
// import { NavLink, Link } from "react-router-dom";
import "./LinksDocs.css";

const LinksDocs = () => {
  return (
    <Fragment>
      <div className="linkdocs-container">
        <h2 className="linkdocs-title">Helpful Links</h2>
        <section className="linkdocs-card-container">
          <section className="linkdocs-card">
            <p className="my-1">link 1</p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
              target="_blank"
              rel="noreferrer"
            >
              <p className="bg-dark p">
                <strong>.filter() JavaScript</strong>
              </p>
            </a>
          </section>

          <section className="linkdocs-card">
            <p className="my-1">link 2</p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
              target="_blank"
              rel="noreferrer"
            >
              <p className="bg-dark p">
                <strong>.filter() JavaScript</strong>
              </p>
            </a>
          </section>

          <section className="linkdocs-card">
            <p className="my-1">link 3</p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
              target="_blank"
              rel="noreferrer"
            >
              <p className="bg-dark p">
                <strong>.filter() JavaScript</strong>
              </p>
            </a>
          </section>
          <section className="linkdocs-card">
            <p className="my-1">link 4</p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
              target="_blank"
              rel="noreferrer"
            >
              <p className="bg-dark">
                <strong>.filter() JavaScript</strong>
              </p>
            </a>
          </section>
        </section>
      </div>
    </Fragment>
  );
};

export default LinksDocs;
