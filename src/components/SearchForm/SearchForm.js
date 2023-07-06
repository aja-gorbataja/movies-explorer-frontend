import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm({ searchMovies, runShortFilter, shortChecked}) {
const [ query, setQuery ] = useState('');

function handleQuery(evt) {
  setQuery(evt.target.value);
}

function handleSubmit(evt) {
  evt.preventDefault();
  searchMovies(query);
}

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