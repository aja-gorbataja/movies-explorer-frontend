import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
  return (
    <section className="search">
        <form className="search__form">
          <label className="search__line">
            <input className="search__input" placeholder="Фильм" type="text" name="film-search" />
            <button className="search__button">Поиск</button>
          </label>
          <FilterCheckbox />
        </form>
      </section>
  )
}

export default SearchForm;