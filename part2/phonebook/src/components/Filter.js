const Filter = ({ filter, handleFilterPerson }) => {
  return (
    <form className="filter-form">
      <div className="form-group">
        <label htmlFor="filterInput" className="form-group__label">
          Filter people:{" "}
        </label>
        <input
          className="form-group__input"
          type="text"
          id="filterInput"
          value={filter}
          onChange={handleFilterPerson}
        />
      </div>
    </form>
  );
};

export default Filter;
