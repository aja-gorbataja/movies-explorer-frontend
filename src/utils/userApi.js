import { MOVIES_URL } from "./moviesApi.js";
export const BASE_URL = 'https://api.popcorn.nomoredomains.rocks';

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error('Произошла ошибка'))
}

export function register({name, email, password}) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
    })
    .then(handleResponse)
}

export function login({email, password}) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
    })
    .then(handleResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    });
}

export function getToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization : `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
    })
    .then(handleResponse)
} 

export function getUser() {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  .then(handleResponse)
}

export function editProfile({name, email}) {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email})
  })
  .then(handleResponse)
}

export function getSavedMovies() {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
  .then(handleResponse)
}

export function saveMovie(movie) {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: movie.country,
      description: movie.description,
      director: movie.director,
      duration: movie.duration,
      movieId: movie.id,
      image: `${MOVIES_URL}${movie.image.url}`,
      thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
      nameEN: movie.nameEN,
      nameRU: movie.nameRU,
      trailerLink: movie.trailerLink,
      year: movie.year
    })
  })
  .then(handleResponse)
}

export function deleteMovie(movieId) {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
  .then(handleResponse)
}