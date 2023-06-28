function FilterCheckbox() {
  return (
          <label className="toggle">
            <input className="toggle__checkbox" type="checkbox" />
            <div className="toggle__switch"></div>
            <span className="toggle__label">Короткометражки</span>
          </label>
  )
}

export default FilterCheckbox;