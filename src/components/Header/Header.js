import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';

function Header({ loggedIn }) {
  return (
    <>
    {!loggedIn ? 
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo" />
          <ul className="header__list">
            <li className="header__list-item"><Link to="/signup" className="header__link">Регистрация</Link></li>
            <li className="header__list-item"><Link to="/signin" className="header__link header__link_button">Войти</Link></li>
          </ul>
        </div>
      </header>
    :
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__logo" />
          <Navigation />
        </div>
      </header>
  }
    </>

  )
}

export default Header