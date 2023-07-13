import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import { useEffect, useState } from 'react';
import * as moviesApi from '../../utils/moviesApi.js';
import Preloader from '../Preloader/Preloader.js';
import { SHORT_MOVIE } from '../../utils/constants.js';

function Movies({ loggedIn, savedMovies, likeMovie, dislikeMovie, isLoading }) {
  const [ allMovies, setAllMovies ] = useState([]);
  const [ shortChecked, setShortChecked ] = useState(false);
  const [ filteredMovies, setFilteredMovies ] = useState([]);
  const [ emptySearch, setEmptySearch ] = useState(false);

  function getAllMovies() {
      moviesApi.getMovies()
        .then((data) => {
          localStorage.setItem('allMovies', JSON.stringify(data));
          setAllMovies(data)
        })
        .catch((err) => {
          console.log(err)
        })
  }
  
  useEffect(() => {
    if (loggedIn) {
      getAllMovies()
    }
  })

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
    return movies.filter((movie) => movie.duration < SHORT_MOVIE);
  }

  function runShortFilter() {
    setShortChecked(!shortChecked);
    if (!shortChecked) {
      setFilteredMovies(filterDuration(filteredMovies));
    } else {
      setFilteredMovies(filteredMovies);
    }
    localStorage.setItem('shortMovies', !shortChecked);
  }

  function searchMovies(query, shortChecked) {
    localStorage.setItem('movieSearch', query);
    localStorage.setItem('shortMovies', shortChecked);
    const filtered = filterMovies(allMovies, query, shortChecked);
    setFilteredMovies(shortChecked ? filterDuration(filtered) : filtered);
    localStorage.setItem('filteredMovies', JSON.stringify(filtered));
  }

  useEffect(() => {
    const searchResult = JSON.parse(localStorage.getItem('filteredMovies'));
    if (searchResult) {
      setFilteredMovies(searchResult);
    }
  }, [])


  useEffect(() => {
    if (localStorage.getItem('allMovies')) {
      setAllMovies(JSON.parse(localStorage.getItem('allMovies')))
    } else {
      getAllMovies()
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('movieSearch')) {
      if (filteredMovies.length === 0) {
        setEmptySearch(true);
      } else {
        setEmptySearch(false);
      }
    } else {
      setEmptySearch(false);
    }
  }, [filteredMovies]);

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
        {isLoading ? <Preloader />
        :
        <MoviesCardList savedMovies={savedMovies} movies={shortChecked ? filterDuration(filteredMovies) : filteredMovies} likeMovie={likeMovie} dislikeMovie={dislikeMovie} isLiked={false} loggedIn={loggedIn} emptySearch={emptySearch} />}
      </main>
      <Footer/>
    </>
  )
}

export default Movies;