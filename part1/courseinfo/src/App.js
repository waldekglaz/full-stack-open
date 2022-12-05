import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
function App() {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of component", exercises: 14 },
  ];
  // const part1 = { name: "Fundamentals of React", exercises: 10 };
  // const part2 = { name: "Using props to pass data", exercises: 7 };

  // const part3 = { name: "State of component", exercises: 14 };

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
