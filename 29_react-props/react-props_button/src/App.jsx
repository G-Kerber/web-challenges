import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("I`m active.");
    alert("You clicked me!");
  }
  return (
    <>
      <h1>Challenge react props - button</h1>
      <Button
        textColor="#Ff0000"
        text="Label"
        disabled={false}
        backgroundColor="#006400"
        onClick={handleClick}
      />
    </>
  );
}
function Button({ textColor, text, disabled, backgroundColor, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      style={{ color: textColor, backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
