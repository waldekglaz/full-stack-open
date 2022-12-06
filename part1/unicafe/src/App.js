import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGoodFeedback = () => {
    setGood(good + 1);
  };
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };
  const handleBadFeedback = () => {
    setNeutral(bad + 1);
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button name="Good" onClick={handleGoodFeedback} func={setGood} />
      <Button name="Neutral" onClick={handleNeutralFeedback} />
      <Button name="Bad" onClick={handleBadFeedback} />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
