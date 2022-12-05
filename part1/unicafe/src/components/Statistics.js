import React from "react";

function Statistics({ good, bad, neutral }) {
  return (
    <ul>
      <li>good {good}</li>
      <li>neutral {neutral}</li>
      <li>bad {bad}</li>
      <li>all {good + neutral + bad}</li>
      <li>average {(good * 1 + bad * -1) / (good + neutral + bad)}</li>
      <li>positive {good / (good + neutral + bad)} %</li>
    </ul>
  );
}

export default Statistics;
