import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={false} />;
}

function Smiley({ isHappy }) {
  return (
    <div>
      <h1>react props - challenge Smiley</h1>
      <p>{isHappy ? "😀" : "😒"}</p>
    </div>
  );
}
