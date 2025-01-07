import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHungry />; //for isHungry=false => isHungry removed
}

function Smiley({ isHungry }) {
  return (
    <div>
      <h1>Challenge: react props - smiley</h1>
      <p>{isHungry ? "🙂" : "😒"}</p>
    </div>
  );
}
