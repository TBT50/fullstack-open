import { useState, useEffect } from "react";

import { Country } from "./Country";

import "./../App.css";

export const Countries = ({ filteredCountries, filter }) => {
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    if (filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0]);
    } else {
      setSelectedCountry(null);
    }
  }, [filteredCountries]);

  if (filter === "") {
    return null;
  } else if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else {
    return (
      <>
        {filteredCountries.length > 1 && (
          <ul className="countryList">
            {filteredCountries.map((country) => (
              <li key={country.name} className="countryList__item">
                {country.name}
                <button
                  type="button"
                  onClick={() => setSelectedCountry(country)}
                  className="countryList__btn"
                >
                  Show
                </button>
              </li>
            ))}
          </ul>
        )}
        {selectedCountry && <Country country={selectedCountry} />}
      </>
    );
  }
};
