export const MOVIES_URL = "https://api.nomoreparties.co";

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error('Произошла ошибка'))
}

export function getMovies() {
  return fetch(`${MOVIES_URL}/beatfilm-movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(handleResponse);
}