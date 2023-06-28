import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({nameRU, duration, image}) {
  const location = useLocation();
  const [saved, setSaved] = useState(false)
  return (
    <article className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{nameRU}</h2>
          <p className="movies-card__duration">{duration}</p>
        </div>
        {location.pathname === "/saved-movies" ?
          <button className="movies-card__button movies-card__button_delete"></button>
          :
          <button className={`movies-card__button ${saved ? "movies-card__button_on" : "movies-card__button_off"}`} onClick={() => setSaved(!saved)}></button>
        }
      </div>
      <img className="movies-card__img" alt="обложка фильма" src={image}/>
    </article>
  )
}

export default MoviesCard;