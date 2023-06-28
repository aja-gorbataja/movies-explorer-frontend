import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({ moviesList }) {
  return (
    <section className="movies-list">
      <div className="movies-list__items">
        {moviesList.map(movie => (
        <MoviesCard key={movie.movieId} nameRU={movie.nameRU} duration={movie.duration} image={movie.image} />
        ))}
      </div>
      <div className="movie-list__pagination">
        <button className="movie-list__button">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList