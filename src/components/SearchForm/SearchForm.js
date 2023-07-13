import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm({ searchMovies, runShortFilter, shortChecked}) {
  const location = useLocation();
  const [ query, setQuery ] = useState('');

  function handleQuery(evt) {
  setQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if(!query) {
      alert('Необходимо ввести поисковой запрос');
    } else {
      searchMovies(query);
    }
    if (location.pathname === '/movies') {
      localStorage.setItem('searchQuery', query)
    }
  }

  useEffect(() => {
    if (location.pathname === '/movies') {
      const savedQuery = localStorage.getItem('searchQuery')
      setQuery(savedQuery)
    }
  }, [location])

  return (
    <section className="search">
        <form className="search__form" onSubmit={handleSubmit}>
          <label className="search__line">
            <input className="search__input" placeholder="Фильм" type="text" name="film-search" onChange={handleQuery} value={query || ""} />
            <button className="search__button">Поиск</button>
          </label>
          <FilterCheckbox shortChecked={shortChecked} runShortFilter={runShortFilter} />
        </form>
      </section>
  )
}

export default SearchForm;