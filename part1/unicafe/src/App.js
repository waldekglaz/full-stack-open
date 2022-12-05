import { useState } from "react";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give Feedback</h2>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
