import React from "react";
import PropTypes from "prop-types";

const ResourceItem = ({ resource: { title, description, html_url } }) => {
  return (
    <div>
      <div className="card text-center round-corners m p">
        <h3>{title}</h3>
        <div className="card-2 text-colour">
          <p>{description}</p>
        </div>
        <div>
          <a href={html_url} className="btn btn-bg btn-sm m p round-corners-2">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

ResourceItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default ResourceItem;
