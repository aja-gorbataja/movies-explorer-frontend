import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { user } from '../../utils/constants.js'

function Profile({ loggedIn }) {
  const [ edit, setEdit ] = useState(false)
  return (
    <>
    <Header loggedIn={loggedIn} />
    <main className="profile">
      <h1 className="profile__title">Привет, {user.name}!</h1>
      <form className="profile__form" id="profile-form">
        <div className="profile__container">
          <label className="proile__label">Имя</label>
          <input className="profile__input" type="text" name="name" defaultValue={user.name} disabled={!edit} required></input>
        </div>
        <span className="profile__input-line" />
        <div className="profile__container">
          <label className="proile__label">E-mail</label>
          <input className="profile__input" type="email" name="email" defaultValue={user.email} disabled={!edit} required></input>
        </div>
      </form>
      {edit ?
        <>
          <span className="profile__error"></span>
          <button className="profile__button-save" type="submit" form="profile-form">Сохранить</button>
        </>
      :
        <>
          <button className="profile__button-edit" type="submit" form="profile-form" onClick={() => setEdit(!edit)}>Редактировать</button>
          <Link className="profile__button-exit" to='/'>Выйти из аккаунта</Link>
        </>
      }
    </main>
    </>
  )
}

export default Profile;
