import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHungry />;
}

function Smiley({ isHungry }) {
  return (
    <div>
      <h1>Challenge: react props - smiley</h1>
      <p>{isHungry ? "🙂" : "😒"}</p>
    </div>
  );
}
