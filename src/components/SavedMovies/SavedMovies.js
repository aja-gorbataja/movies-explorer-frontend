import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";
import { useState, useEffect } from "react";

function SavedMovies({ loggedIn, savedMovies, dislikeMovie }) {
  const [ shortChecked, setShortChecked ] = useState(false);
  const [ filteredMovies, setFilteredMovies ] = useState([]);
  const [ query, setQuery ] = useState('')

  function filterMovies(movies, query) {
    const queryMovies = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const userQuery = query.toLowerCase().trim();
      return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
    });
    return queryMovies;
  }

  function filterDuration(movies) {
    return movies.filter((movie) => movie.duration < 40);
  }

  function runFilter(query) {
    setQuery(query)
  }

  function runShortFilter() {
    setShortChecked(!shortChecked);
  }

  useEffect(() => {
    const moviesList = filterMovies(savedMovies, query);
    setFilteredMovies(shortChecked ? filterDuration(moviesList) : moviesList);
  }, [savedMovies, shortChecked, query]);

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setShortChecked(true);
    } else {
      setShortChecked(false);
    }
  }, []);

  return (
    <>
    <Header loggedIn={loggedIn}/>
    <main>
      <SearchForm runShortFilter={runShortFilter} searchMovies={runFilter} shortChecked={shortChecked} />
      <MoviesCardList isLiked={true} movies={filteredMovies} savedMovies={savedMovies} dislikeMovie={dislikeMovie}/>
    </main>
    <Footer />
    </>
  )
}

export default SavedMovies;
