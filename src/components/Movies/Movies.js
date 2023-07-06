import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import { useEffect, useState } from 'react';
import * as moviesApi from '../../utils/moviesApi.js';
import Preloader from '../Preloader/Preloader.js';

function Movies({ loggedIn, savedMovies, likeMovie, dislikeMovie, isLoading }) {
  const [ foundMovies, setFoundMovies ] = useState([])
  const [ shortChecked, setShortChecked ] = useState(false);
  const [ filteredMovies, setFilteredMovies ] = useState([]);

  function filterMovies(movies, query) {
    const queryMovies = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase();
      const movieEn = String(movie.nameEN).toLowerCase();
      const userQuery = query.toLowerCase();
      return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
    });
    return queryMovies;
  }

  function filterDuration(movies) {
    return movies.filter((movie) => movie.duration < 40);
  }

  function runFilter(movies, query, short) {
    const moviesList = filterMovies(movies, query, short);
    setFoundMovies(moviesList);
    setFilteredMovies(short ? filterDuration(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
    localStorage.setItem('allMovies', JSON.stringify(movies));
  }

  function runShortFilter() {
    setShortChecked(!shortChecked);
    if (!shortChecked) {
      setFilteredMovies(filterDuration(foundMovies));
    } else {
      setFilteredMovies(foundMovies);
    }
    localStorage.setItem('shortMovies', !shortChecked);
  }

  function searchMovies(query) {
    localStorage.setItem('movieSearch', query);
    localStorage.setItem('shortMovies', shortChecked);
    if (localStorage.getItem('allMovies')) {
      const allMovies = JSON.parse(localStorage.getItem('allMovies'));
      runFilter(allMovies, query, shortChecked);
    } else {
      moviesApi.getMovies()
        .then((data) => {
          runFilter(data, query, shortChecked);
        })
        .catch(() => {
          alert('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
    }
  }

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (localStorage.getItem('movies')) {
      setFoundMovies(movies);
      if (localStorage.getItem('shortMovies') === 'true') {
        setFilteredMovies(filterDuration(movies))
      }
    } else {
      setFilteredMovies(movies)
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setShortChecked(true);
    } else {
      setShortChecked(false);
    }
  }, []);

  return(
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm searchMovies={searchMovies} runShortFilter={runShortFilter} shortChecked={shortChecked} />
        {isLoading ? 
          <Preloader />
          :
          <MoviesCardList savedMovies={savedMovies} movies={filteredMovies} likeMovie={likeMovie} dislikeMovie={dislikeMovie} isLiked={false} />
        }
      </main>
      <Footer/>
    </>
  )
}

export default Movies;