import React from "react";
import ShowCard from "./ShowCard/ShowCard";

const Shows = ({ shows }) => {
    console.log(shows)
  if (shows.length === 0) {
    return <div id="noShows">No shows in data base</div>;
  }

  return (
    <div className="row">
      {shows.map((show, key) => (
        <ShowCard key={key} show={show} />
      ))}
    </div>
  );
};

export default Shows;
