import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";
import { savedMoviesList } from "../../utils/constants";

function SavedMovies() {
  return (
    <>
    <Header />
    <SearchForm />
    <MoviesCardList moviesList={savedMoviesList} />
    <Footer />
    </>
  )
}

export default SavedMovies;
