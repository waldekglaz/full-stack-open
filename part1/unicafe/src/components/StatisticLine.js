import React from "react";

function StatisticLine({ text, value }) {
  return (
    <td>
      {text} {value}
    </td>
  );
}

export default StatisticLine;
