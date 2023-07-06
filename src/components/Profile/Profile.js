import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Validation } from "../Validation/Validation.js";
import { CurrentUserContext } from '../../context/CurrentUserContext.js';

function Profile({ loggedIn, handleOut, handleEditProfile }) {

  const { values, errors, valid, handleChange } = Validation({});
  const currentUser = useContext(CurrentUserContext);
  const [ edit, setEdit ] = useState(false);
  
  function handleSubmit(evt) {
    evt.preventDefault();
    handleEditProfile(values.name, values.email)
  }
  
  return (
    <>
    <Header loggedIn={loggedIn} />
    <main className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <form className="profile__form form" id="profile-form" onSubmit={handleSubmit}>
        <div className="profile__container">
          <label className="profile__label">Имя</label>
          <input className={errors.name ? "profile__input profile__input_error" : "profile__input"} type="text" name="name" placeholder={`${currentUser.name}`} value={values.name || ''} onChange={handleChange} disabled={!edit} minLength={2} maxLength={20} required></input>
          <span className="profile__error">{errors.name}</span>
        </div>
        <span className="profile__input-line" />
        <div className="profile__container">
          <label className="profile__label">E-mail</label>
          <input className={errors.name ? "profile__input profile__input_error" : "profile__input"} type="email" name="email" placeholder={`${currentUser.email}`} value={values.email || ''} onChange={handleChange} disabled={!edit} minLength={2} maxLength={20} required></input>
          <span className="profile__error">{errors.email}</span>
        </div>
      </form>
      {edit ?
        <>
          <span className="profile__error"></span>
          <button className={valid ? "profile__button-save" : "profile__button-save profile__button-save_disabled"} type="submit" form="profile-form" >Сохранить</button>
        </>
      :
        <>
          <button className="profile__button-edit" type="submit" form="profile-form" onClick={() => setEdit(!edit)}>Редактировать</button>
          <Link className="profile__button-exit" to='/' onClick={handleOut}>Выйти из аккаунта</Link>
        </>
      }
    </main>
    </>
  )
}

export default Profile;
