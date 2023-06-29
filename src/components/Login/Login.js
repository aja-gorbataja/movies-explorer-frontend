import { Link } from "react-router-dom";
import { Validation } from "../Validation/Validation.js";

function Login() {
  const { values, errors, valid, handleChange } = Validation({});
  return (
    <main className="login">
      <Link className="login__logo" to='/' />
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form form" id="login-form">
      <div className="login__container">
          <label className="login__label">E-mail</label>
          <input className={errors.email ? "login__input login__input_error" : "login__input"} type="email" name="email" value={values.email || ''} onChange={handleChange} minLength={2} maxLength={20} required></input>
          <span className="login__error">{errors.email}</span>
        </div>
        <div className="login__container">
          <label className="login__label">Пароль</label>
          <input className={errors.password ? "login__input login__input_error" : "login__input"} type="password" name="password" value={values.password || ''} onChange={handleChange} minLength={8} maxLength={20} required></input>
          <span className="login__error">{errors.password}</span>
        </div>
      </form>
      <button className={valid ? "login__button" : "login__button login__button_disabled"} type="submit" form="login-form" disabled={!valid}>Войти</button>
      <p className="login__text">Ещё не зарегистрированы? <Link className="login__link" to='/signup' >Регистрация</Link></p>
    </main>
  )
}

export default Login;