function AboutProject() {
  return (
    <section className="project" id="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__container">
        <div className="project__container-item">
          <h3 className="project__info">Дипломный проект включал 5 этапов</h3>
          <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
          <h3 className="project__info">На выполнение диплома ушло 5 недель</h3>
          <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div> 
      </div>
      <div className="project__timing">
        <p className="project__line project__line_black">1 неделя</p>
        <p className="project__line">4 недели</p>
        <p className="project__line project__line_transparent">Back-end</p>
        <p className="project__line project__line_transparent">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;
