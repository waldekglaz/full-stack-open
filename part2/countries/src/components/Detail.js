import React from "react";

function Detail({ data }) {
  console.log(data);
  const country = data[0];

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>
      <ul>
        {Object.values(country.languages).map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
    </div>
  );
}

export default Detail;
