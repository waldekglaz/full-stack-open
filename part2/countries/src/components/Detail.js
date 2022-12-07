import React from "react";
import uniqid from "uniqid";

function Detail({ data }) {
  const country = data[0];

  return (
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
  );
}

export default Detail;
