import React from "react";

function StatisticLine({ text, value }) {
  return (
    <li>
      {text} {value}
    </li>
  );
}

export default StatisticLine;
