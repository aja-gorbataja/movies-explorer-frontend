function FilterCheckbox({ shortChecked, runShortFilter }) {
  return (
          <label className="toggle">
            <input className="toggle__checkbox" type="checkbox" checked={shortChecked} onChange={runShortFilter} />
            <div className="toggle__switch"></div>
            <span className="toggle__label">Короткометражки</span>
          </label>
  )
}

export default FilterCheckbox;