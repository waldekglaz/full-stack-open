import React from "react";
import StatisticLine from "./StatisticLine";

function Statistics({ good, bad, neutral }) {
  const avg = good * 1 + (bad * -1) / (good + neutral + bad);
  const positivePercentage = `${(good / (good + neutral + bad)) * 100} %`;
  if (good > 0 || bad > 0 || neutral > 0) {
    return (
      <table>
        <caption>Statistics</caption>
        <tbody>
          <tr>
            <StatisticLine text="good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="average" value={avg} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={positivePercentage} />
          </tr>
        </tbody>
      </table>
    );
  }
  return <p>No feedback given</p>;
}

export default Statistics;
