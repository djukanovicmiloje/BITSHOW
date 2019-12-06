import Show from "../entities/show";

async function fetchShowByQuery(query) {
  const response = await fetch(`http://api.tvmaze.com/search/shows?q=${query}`);
  const showsData = await response.json();

  let shows;
  console.log(showsData);
  if (showsData) {
    shows = showsData.map(
      show =>
        new Show(
          show.show.id,
          show.show.name,
          show.show.genres[0],
          show.show.image
            ? show.show.image.original
            : "https://via.placeholder.com/150",
          show.show.summary,
          show.show.externals.imdb,
          show.show.rating.average
        )
    );
  } else {
    shows = [];
  }

  return shows;
}
export default fetchShowByQuery;