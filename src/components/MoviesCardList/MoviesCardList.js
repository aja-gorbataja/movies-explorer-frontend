import MoviesCard from "../MoviesCard/MoviesCard.js";
import { useState, useEffect,} from "react";

function MoviesCardList({ movies, savedMovies, likeMovie, dislikeMovie, isLiked }) {
  const [ moviesQuantity, setMoviesQuantity ] = useState(0);
  const [ moviesList, setMoviesList ] = useState([]);
  const [ width, setWidth ] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth)
    }

    if (width < 500) {
      setMoviesQuantity(5);
    } else if (width < 800) {
     setMoviesQuantity(8)
    } else {
      setMoviesQuantity(12)
    }

    }, [width]);

  useEffect(() => {
    setMoviesList(movies)
  }, [movies]);

  function handleAddMovies() {
    if (width < 800) {
      setMoviesQuantity(moviesQuantity + 2)
    } else {
      setMoviesQuantity(moviesQuantity + 3)
    }
  }

 function getSavedMovies(savedMovies, movie) {
   return savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)
 }

  return (
    <section className="movies-list">
      <div className="movies-list__items">
        {moviesList.slice(0, moviesQuantity).map((movie) => (
        <MoviesCard key={movie.id || movie._id} saved={getSavedMovies(savedMovies, movie)} movie={movie} movies={movies} likeMovie={likeMovie} dislikeMovie={dislikeMovie} isLiked={isLiked} />
        ))}
      </div>
      <div className="movies-list__pagination">
        <button className="movies-list__button" onClick={handleAddMovies}>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList