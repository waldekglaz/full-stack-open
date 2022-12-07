import React from "react";

function PersonsList({ data }) {
  return (
    <div>
      {data.map((person) => (
        <p key={person.name}>{`${person.name}: ${person.number}`}</p>
      ))}
    </div>
  );
}

export default PersonsList;
