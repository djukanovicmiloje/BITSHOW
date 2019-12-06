import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ show }) => (
  <Link to={`/show/${show.id}`}>
    <div className="col s3">
      <div className="card">
        <div className="card-image show-card">
          <img src={show.image} alt="show-poster" />
          <div className="btn-floating halfway-fab  rating">{show.rating}</div>
        </div>
        <span className="card-title">{show.name}</span>
      </div>
    </div>
  </Link>
);

export default ShowCard;
