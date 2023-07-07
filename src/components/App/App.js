import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Page404 from '../Page404/Page404.js';
import './App.css';
import * as userApi from '../../utils/userApi.js';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

function App() {
  const navigate = useNavigate();
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({});
  const [ savedMovies, setSavedMovies ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    checkToken();
  }, [])

  function handleRegister(name, email, password) {
    userApi.register({name, email, password})
      .then(() => {
        navigate('/signin')
      })
      .catch(() => {
          alert('При регистрации пользователя произошла ошибка.')
      })
  }

  function handleLogin(email, password) {
    userApi.login({email, password}) 
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
        setCurrentUser(res);
        navigate('/movies');
      })
      .catch(() => {
          alert('Вы ввели неправильный логин или пароль');
      })
    }

    const checkToken = () => {
      const token = localStorage.getItem('token');
      if (token) {
        userApi.getToken(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
      }
    }


  function handleOut() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn')
    setCurrentUser({});
    navigate('/')
  }

  function handleEditProfile(name, email) {
    userApi.editProfile({name, email})
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(() => {
        alert('При изменении данных пользователя произошла ошибка.')
    })
  }

  useEffect(() => {
    setIsLoading(true);
    if (loggedIn) {
      Promise.all([userApi.getUser(), userApi.getSavedMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setSavedMovies(moviesData);
        })
        .catch((err) => {
          alert(err);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }, [loggedIn]);

  function likeMovie(movie) {
    userApi.saveMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function dislikeMovie(movie) {
    userApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== movie._id));
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn}/>} />
          <Route path='/movies' element={<ProtectedRoute element={Movies} loggedIn={loggedIn} savedMovies={savedMovies} likeMovie={likeMovie} dislikeMovie={dislikeMovie} isLoading={isLoading} />} />
          <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} savedMovies={savedMovies} dislikeMovie={dislikeMovie} />} />
          <Route path='/signup' element={<Register handleRegister={handleRegister} />} />
          <Route path='/signin' element={<Login handleLogin={handleLogin} />} />
          <Route path='/profile' element={<ProtectedRoute element={Profile} handleOut={handleOut} handleEditProfile={handleEditProfile} loggedIn={loggedIn} />} />
          <Route path='/*' element={<Page404 />} />
      </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;