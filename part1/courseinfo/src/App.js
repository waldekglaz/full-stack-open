import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of component";
  const exercises3 = 14;
  return (
    <div>
      <Header title={course} />
      <Content part={part1} exercises={exercises1} />
      <Total
        excersises1={exercises1}
        excersises2={exercises2}
        excersises3={exercises3}
      />
    </div>
  );
}

export default App;
