import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Navigation() {
  const [nav, setNav] = useState(false)
  const location = useLocation();

  return (
    <div className="navigation">
      <div className={`navigation__container ${nav ?  "navigation__container_active" : ""}`}>
      <ul className="navigation__list">
        <li className="navigation__item"><Link className={`navigation__link  navigation__link_hidden ${location.pathname === "/" && "navigation__link_active"}`} to='/'>Главная</Link></li>
        <li className="navigation__item"><Link className={`navigation__link ${location.pathname === "/movies" && "navigation__link_active"}`} to='/movies'>Фильмы</Link></li>
        <li className="navigation__item"><Link className={`navigation__link ${location.pathname === "/saved-movies" && "navigation__link_active"}`} to='/saved-movies'>Сохраненные фильмы</Link></li>
      </ul>
      <div className="navigation__account">
        <Link className="navigation__account-button" to='/profile' />
        </div>
      </div>
      <div className="navigation__burger" onClick={() => setNav(!nav)}>
        {nav ? <div className="navigation__burger-close"></div> : <div className="navigation__burger-open"></div>}
      </div>
    </div>
  )
}

export default Navigation;
