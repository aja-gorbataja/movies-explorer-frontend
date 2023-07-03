import avatar from '../../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">Студент</h2>
      <div className="about__container">
        <b className="about__name">Виталий</b>
        <b className="about__info">Фронтенд-разработчик, 30 лет</b>
        <p className="about__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <a className="about__link" href='https://github.com/aja-gorbataja?tab=repositories' target='blank'>Github</a> 
        <img className="about__img" src={avatar} alt="аватар студента" />
      </div>
    </section>
  )
}

export default AboutMe;
