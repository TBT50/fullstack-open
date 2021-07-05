import "./../App.css";

export const SearchFilter = ({ filter, handlefilterCountries }) => (
  <form className="searchFilter">
    <div>
      <label htmlFor="filter" className="searchFilter__label">
        Find countries:
      </label>
      <input
        type="text"
        id="filter"
        className="searchFilter__input"
        value={filter}
        onChange={handlefilterCountries}
      />
    </div>
  </form>
);
