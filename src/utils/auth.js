export const BASE_URL = 'https://api.popcorn.nomoredomains.rocks';

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error('Произошла ошибка'))
}

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
    })
    .then(handleResponse)
}

export function login(email, password) {
  const token = localStorage.getItem('token');
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
    })
    .then(handleResponse)
}

export function getToken() {
  const token = localStorage.getItem('token');

  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization : `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
    })
    .then(handleResponse)
} 