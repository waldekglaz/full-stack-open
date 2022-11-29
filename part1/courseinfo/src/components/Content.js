import React from "react";
import Part from "./Part";

function Content(props) {
  return (
    <div>
      <Part part={props.part} exercises={props.exercises} />
      <Part part={props.part} exercises={props.exercises} />
      <Part part={props.part} exercises={props.exercises} />
    </div>
  );
}

export default Content;
