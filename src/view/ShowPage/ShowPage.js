import React from "react";
import Cast from "./Cast";

const ShowPage = ({ show }) => (
  <div class="row" id="showPage">
    <img class="col s6" src={show.image} alt=""></img>
    <h1>{show.name}</h1>
    <p>{show.summary}</p>
    <Cast cast={show.cast} />
  </div>
);

export default ShowPage;