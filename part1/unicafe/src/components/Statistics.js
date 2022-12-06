import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics({ good, bad, neutral }) {
  const avg = good * 1 + (bad * -1) / (good + neutral + bad);
  const positivePercentage = `${(good / (good + neutral + bad)) * 100} %`;
  if (good > 0 || bad > 0 || neutral > 0) {
    return (
      <>
        <h2>Statistics</h2>
        <ul>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={positivePercentage} />
        </ul>
      </>
    );
  }
  return <p>No feedback given</p>;
}

export default Statistics;
