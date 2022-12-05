import { useState } from "react";

function App() {
  const [good, setGood] = useState(6);
  const [neutral, setNeutral] = useState(2);
  const [bad, setBad] = useState(1);
  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>all {good + neutral + bad}</li>
        <li>average {(good * 1 + bad * -1) / (good + neutral + bad)}</li>
        <li>positive {good / (good + neutral + bad)} %</li>
      </ul>
    </div>
  );
}

export default App;
