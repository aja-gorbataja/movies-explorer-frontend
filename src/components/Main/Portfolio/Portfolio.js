function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__container">
        <p className="portfolio__name"><a className="portfolio__link" href="https://aja-gorbataja.github.io/how-to-learn/" target="blank">Статичный сайт</a></p>
        <a className="portfolio__link" href="https://aja-gorbataja.github.io/how-to-learn/" target="blank">↗</a>
      </div>
      <div className="portfolio__container">
        <p className="portfolio__name"><a className="portfolio__link" href="https://aja-gorbataja.github.io/russian-travel/" target="blank">Адаптивный сайт</a></p>
        <a className="portfolio__link" href="https://aja-gorbataja.github.io/russian-travel/" target="blank">↗</a>
      </div>
      <div className="portfolio__container">
        <p className="portfolio__name"><a className="portfolio__link" href="https://aja-gorbataja.github.io/mesto/" target="blank">Одностраничное приложение</a></p>
        <a className="portfolio__link" href="https://aja-gorbataja.github.io/mesto/" target="blank">↗</a>
      </div>
    </section>
  )
}

export default Portfolio;
