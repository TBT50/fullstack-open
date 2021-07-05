import { useState, useEffect } from "react";
import "./App.css";

import { SearchFilter } from "./components/SearchFilter";
import { Countries } from "./components/Countries";

import axios from "axios";

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilterCountries] = useState("");

  const fetchCountries = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handlefilterCountries = (event) => {
    setFilterCountries(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <SearchFilter
        filter={filter}
        handlefilterCountries={handlefilterCountries}
      />
      <Countries filter={filter} filteredCountries={filteredCountries} />
    </>
  );
};
