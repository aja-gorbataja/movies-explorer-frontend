import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="register">
      <Link className="register__logo" to='/' />
      <h2 className="register__title">Рады видеть!</h2>
      <form className="register__form" id="register-form">
        <label className="register__input-name">
          E-mail
          <input className="register__input" type="email" name="email" required></input>
        </label>
        <label className="register__input-name">
          Пароль
          <input className="register__input" type="password" name="password" required></input>
        </label>
      </form>
      <button className="register__button" type="submit" form="register-form">Войти</button>
      <p className="register__text">Ещё не зарегистрированы? <Link className="register__link" to='/' >Регистрация</Link></p>
    </section>
  )
}

export default Login;