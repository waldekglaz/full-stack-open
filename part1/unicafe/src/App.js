import { useState } from "react";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(6);
  const [neutral, setNeutral] = useState(2);
  const [bad, setBad] = useState(1);
  return (
    <div>
      <h2>Give Feedback</h2>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
