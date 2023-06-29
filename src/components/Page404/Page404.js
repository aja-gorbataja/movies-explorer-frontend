import { Link } from "react-router-dom";

function Page404() {
  return (
    <main className="error-page">
      <b className="error-page__title">404</b>
      <p className="error-page__text">Страница не найдена</p>
      <Link className="error-page__link" to='/'>Назад</Link>
    </main>
  )
}

export default Page404;
