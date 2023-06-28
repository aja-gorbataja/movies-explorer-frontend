import Header from '../Header/Header.js';

function Profile({ loggedIn }) {
  return (
    <main className="profile">
      <Header loggedIn={loggedIn} />
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" id="profile-form">
        <label>
          <input className="profile__input" type="text" name="name" placeholder="Имя" required></input>
        </label>
        <span className="profile__input-line" />
        <label>
          <input className="profile__input" type="email" name="email" placeholder="E-mail" required></input>
        </label>
      </form>
      <button className="profile__button-edit" type="submit" form="profile-form">Редактировать</button>
      <button className="profile__button-exit">Выйти из аккаунта</button>
    </main>
  )
}

export default Profile;
