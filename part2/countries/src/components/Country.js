import { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

export const Country = ({ country }) => {
  const [temperature, setTemperature] = useState({});
  const fetchTemperature = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
      )
      .then((response) => {
        setTemperature(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    fetchTemperature();
  }, [country]);

  return (
    <div className="country">
      <h2>{country.name}</h2>
      <p>
        <strong>Capital:</strong> <span>{country.capital}</span>
      </p>
      <p>
        <strong>Population:</strong> <span>{country.population}</span>
      </p>
      <div>
        <p>Flag</p>
        <img src={country.flag} className="country__flag" alt="" />
      </div>
      <h3>Spoken languages: </h3>
      <ul>
        {country.languages.map((language, i) => (
          <li key={i}>{language.name}</li>
        ))}
      </ul>

      {temperature.current ? (
        <>
          <h3>Weather in {country.capital}:</h3>
          <p>
            <strong>Temperature:</strong> {temperature.current.temperature}{" "}
            Celcius
          </p>
          <div>
            <img src={temperature.current.weather_icons[0]} alt="" />
          </div>
          <p>
            <strong>Wind:</strong> {temperature.current.wind_speed} mph
            direction {temperature.current.wind_dir}
          </p>
        </>
      ) : null}
    </div>
  );
};
