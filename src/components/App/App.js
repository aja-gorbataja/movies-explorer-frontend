import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Page404 from '../Page404/Page404.js';
import './App.css';
import * as auth from '../../utils/auth.js';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [ loggedIn, setLoggedIn ] = useState(false);

  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then(() => {
        navigate('/signin')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleLogin(email, password) {
    auth.login(email, password) 
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        navigate('/');
      })
      .catch((err) => {
        console.log(err)
      })
    }

  function handleOut() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/signin')
  }

  return (
      <div className="page">
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn}/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/saved-movies' element={<SavedMovies/>} />
        <Route path='/signup' element={<Register handleRegister={handleRegister} />} />
        <Route path='/signin' element={<Login handleLogin={handleLogin} />} />
        <Route path='/profile' element={<Profile handleOut={handleOut} />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
