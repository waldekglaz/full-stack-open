import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
function App() {
  const course = "Half Stack application development";
  const part1 = { name: "Fundamentals of React", exercises: 10 };
  const part2 = { name: "Using props to pass data", exercises: 7 };

  const part3 = { name: "State of component", exercises: 14 };

  return (
    <div>
      <Header title={course} />
      <Content part={part1.name} exercises={part1.exercises} />
      <Total
        excersises1={part1.exercises}
        excersises2={part2.exercises}
        excersises3={part3.exercises}
      />
    </div>
  );
}

export default App;
