import React, { useEffect, useState } from "react";
import axios from "axios";
import uniqid from "uniqid";
const api_key = process.env.REACT_APP_WEATHER_KEY;

function Detail({ data }) {
  const country = data[0];
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`
      )
      .then((res) => {
        setWeather(res.data);
      });
  }, []);

  return (
    <div>
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        <ul>
          {Object.values(country.languages).map((item) => (
            <li key={uniqid()}>{item}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.name.common} />
      </div>
      {weather.main && (
        <div>
          <h2>Weather in {country.capital}</h2>
          <p>temperature {Math.floor(weather.main.temp)} Celcius</p>

          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="icon"
          />
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
