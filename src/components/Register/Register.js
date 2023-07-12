import { Link } from "react-router-dom";
import { Validation } from "../Validation/Validation.js";
import { REG_EMAIL, REG_NAME } from "../../utils/regex.js";

function Register({handleRegister}) {

  const { values, errors, valid, handleChange } = Validation({});
  
  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister(values.name, values.email, values.password)
  }

  return (
    <main className="register">
      <Link className="register__logo" to='/' />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form form" id="register-form">
        <div className="register__container">
          <label className="register__label">Имя</label>
          <input className={errors.name ? "register__input register__input_error" : "register__input"} type="text" name="name" value={values.name || ''} onChange={handleChange} minLength={2} maxLength={20} pattern={REG_NAME} required></input>
          <span className="register__error">{errors.name}</span>
        </div>
        <div className="register__container">
          <label className="register__label">E-mail</label>
          <input className={errors.email ? "register__input register__input_error" : "register__input"} type="email" name="email" value={values.email || ''} onChange={handleChange} minLength={2} maxLength={20} pattern={REG_EMAIL} required></input>
          <span className="register__error">{errors.email}</span>
        </div>
        <div className="register__container">
          <label className="register__label">Пароль</label>
          <input className={errors.password ? "register__input register__input_error" : "register__input"} type="password" name="password" value={values.password || ''} onChange={handleChange} minLength={8} maxLength={20} required></input>
          <span className="register__error">{errors.password}</span>
        </div>
      </form>
      <button className={valid ? "register__button" : "register__button register__button_disabled"} type="submit" onClick={handleSubmit} form="register-form" disabled={!valid}>Зарегистрироваться</button>
      <p className="register__text">Уже зарегистрированы? <Link className="register__link" to='/signin' >Войти</Link></p>
    </main>
  )
}

export default Register;