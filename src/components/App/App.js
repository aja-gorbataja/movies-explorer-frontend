import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Page404 from '../Page404/Page404.js';
import './App.css';

function App() {

  return (
      <div className="page">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/saved-movies' element={<SavedMovies/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
