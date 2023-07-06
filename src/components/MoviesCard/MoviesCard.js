import { MOVIES_URL } from "../../utils/moviesApi.js";

function MoviesCard({ isLiked, saved, likeMovie, dislikeMovie, movie }) {

  function fixDuration(duration) {
    const hours = Math.floor(duration/60);
    const minutes = Math.floor(duration % 60);
    return `${hours > 0 ? hours + 'ч ' : ''}${minutes}м`;
  }

  function handleClick() {
    if (!saved) {
      likeMovie(movie);
    }
    
  }

  function handleDelete() {
    dislikeMovie(movie);
  }

  return (
    <article className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <p className="movies-card__duration">{fixDuration(movie.duration)}</p>
        </div>
        {isLiked ?
          <button className="movies-card__button movies-card__button_delete" onClick={handleDelete}></button>
          :
          <button className={`movies-card__button ${saved ? "movies-card__button_on" : "movies-card__button_off"}`} onClick={handleClick}></button>
        }
      </div>
      <a className="movies-card__link" href={movie.trailerLink} target="blank"><img className="movies-card__img" alt="обложка фильма" src={isLiked ? movie.image : `${MOVIES_URL}${movie.image.url}`}/></a>
    </article>
  )
}

export default MoviesCard;