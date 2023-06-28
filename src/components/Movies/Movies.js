import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import { moviesList } from "../../utils/constants";

function Movies({ loggedIn }) {
  return(
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm/>
      <MoviesCardList moviesList={moviesList} />
      <Footer/>
    </>
  )
}

export default Movies;