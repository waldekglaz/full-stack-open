import React from "react";

function CountryListItem({ country, handleClick }) {
  return (
    <div>
      <span>{country.name.common}</span>{" "}
      <button onClick={handleClick}>show</button>
    </div>
  );
}

export default CountryListItem;
