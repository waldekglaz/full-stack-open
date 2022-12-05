import React from "react";

function Statistics({ good, bad, neutral }) {
  if (good > 0 || bad > 0 || neutral > 0) {
    return (
      <>
        <h2>Statistics</h2>
        <ul>
          <li>good {good}</li>
          <li>neutral {neutral}</li>
          <li>bad {bad}</li>
          <li>all {good + neutral + bad}</li>
          <li>average {(good * 1 + bad * -1) / (good + neutral + bad)}</li>
          <li>positive {good / (good + neutral + bad)} %</li>
        </ul>
      </>
    );
  }
  return <p>No feedback given</p>;
}

export default Statistics;
