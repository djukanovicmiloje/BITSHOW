import React from "react";

const ActorCardList = ({ actor }) => (
  <li className="collection-item avatar list">
    <img src={actor.image} alt="" className="circle"></img>
    <span className="title">{actor.name}</span>
  </li>
);
export default ActorCardList;
