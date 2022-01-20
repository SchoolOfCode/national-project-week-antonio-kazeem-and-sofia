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
            <p className="my-1">.filter()</p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
              target="_blank"
              rel="noreferrer"
            >
              <p className="bg-dark p">
                <strong>See here...</strong>
              </p>
            </a>
          </section>

          <section className="linkdocs-card">
            <p className="my-1">.map()</p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
              target="_blank"
              rel="noreferrer"
            >
              <p className="bg-dark p">
                <strong>See here...</strong>
              </p>
            </a>
          </section>

          <section className="linkdocs-card">
            <p className="my-1">.reduce()</p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
              target="_blank"
              rel="noreferrer"
            >
              <p className="bg-dark p">
                <strong>See here...</strong>
              </p>
            </a>
          </section>
          <section className="linkdocs-card">
            <p className="my-1">.slice()</p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
              target="_blank"
              rel="noreferrer"
            >
              <p className="bg-dark">
                <strong>See here...</strong>
              </p>
            </a>
          </section>
        </section>
      </div>
    </Fragment>
  );
};

export default LinksDocs;
