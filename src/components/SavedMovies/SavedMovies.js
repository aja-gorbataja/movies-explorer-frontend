import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";
import { savedMoviesList } from "../../utils/constants";

function SavedMovies() {
  return (
    <>
    <Header />
    <main>
      <SearchForm />
      <MoviesCardList moviesList={savedMoviesList} />
    </main>
    <Footer />
    </>
  )
}

export default SavedMovies;
