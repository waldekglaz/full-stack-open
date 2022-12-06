import React from "react";

function Total({ parts }) {
  const initialValue = 0;
  const sumOfExercises = parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, initialValue);
  return <p>Number of exercises {sumOfExercises}</p>;
}

export default Total;
