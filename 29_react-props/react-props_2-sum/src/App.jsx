import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA="1" valueB="2" />;
}

function Sum({ valueA, valueB }) {
  let sum = Number(valueA) + Number(valueB);
  return (
    <div>
      <h1>Challenge - react-props_sum</h1>
      <p>
        {sum} ist die Summe aus {valueA} und {valueB}
      </p>
    </div>
  );
}
