import MoviesCard from "../MoviesCard/MoviesCard.js";
import { useState, useEffect,} from "react";
import { MOBILE, TABLET } from "../../utils/constants.js";

function MoviesCardList({ movies, savedMovies, likeMovie, dislikeMovie, isLiked, loggedIn }) {
  const [ moviesQuantity, setMoviesQuantity ] = useState(0);
  const [ moviesList, setMoviesList ] = useState([]);
  const [ width, setWidth ] = useState(window.innerWidth);


  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth)
    }

    if (width < MOBILE) {
      setMoviesQuantity(5);
    } else if (width < TABLET) {
     setMoviesQuantity(8)
    } else {
      setMoviesQuantity(12)
    }

    }, [width]);

  useEffect(() => {
    setMoviesList(movies)
  }, [movies]);

  function handleAddMovies() {
    if (width < TABLET) {
      setMoviesQuantity(moviesQuantity + 2)
    } else {
      setMoviesQuantity(moviesQuantity + 3)
    }
  }

 function getSavedMovies(savedMovies, movie) {
   return savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)
 }

 useEffect(() => {
  if (movies) {
    setMoviesList(movies.slice(0, moviesQuantity))
  }
 }, [movies, moviesQuantity])

  return (
    <section className="movies-list">
      <div className="movies-list__items">
        {moviesList.map((movie) => (
        <MoviesCard key={movie.id || movie._id} saved={getSavedMovies(savedMovies, movie)} movie={movie} movies={movies} savedMovies={savedMovies} likeMovie={likeMovie} dislikeMovie={dislikeMovie} isLiked={isLiked} />
        ))}
      </div>
      {movies.length > 0 ? 
          <div className={movies.length > moviesQuantity ? "movies-list__pagination" : "movies-list__pagination_hidden"}>
            <button className="movies-list__button" onClick={handleAddMovies}>Ещё</button>
          </div>
          :
          <div className="movies-list__empty">
            <p className="movies-list__text">Ничего не найдено :( </p>
          </div>
    }

    </section>
  )
}

export default MoviesCardList