import React from "react";

const ActorCardGrid = ({ actor }) => (
  <div className="card col s2">
    <div className="card-image actor">
      <img src={actor.image}></img>
      <span className="card-title">{actor.name}</span>
    </div>
  </div>
);
export default ActorCardGrid;
