import { useState } from "react";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(6);
  const [neutral, setNeutral] = useState(2);
  const [bad, setBad] = useState(1);
  return (
    <div>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
