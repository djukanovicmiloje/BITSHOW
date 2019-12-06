import Show from "../entities/show";
import Actor from "../entities/actor";

async function fetchSingleShow(showId) {
  const url = `http://api.tvmaze.com/shows/${showId}?embed=cast`;

  const response = await fetch(url);
  const showData = await response.json();

  const { id, name, genres, image, summary, externals, rating } = showData;

  const cast = showData._embedded.cast.map(
    actor =>
      new Actor(
        actor.person.name,
        actor.person.image
          ? actor.person.image.original
          : "https://via.placeholder.com/150"
      )
  );

  return new Show(
    id,
    name,
    genres,
    image ? image.original : "https://via.placeholder.com/150",
    summary
      .replace("<p>", "")
      .replace("</p>", "")
      .replace("<b>", "")
      .replace("</b>", ""),
    externals.imdb,
    rating.average,
    cast
  );
}
export default fetchSingleShow;
