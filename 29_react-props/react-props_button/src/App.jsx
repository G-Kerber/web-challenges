import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>Challenge react props - button</h1>
      <Button color="#Ff0000" text="Label" disabled={true} />
    </>
  );
}
function Button({ color, text, disabled }) {
  return (
    <button type="button" disabled={disabled} style={{ color: { color }, backgroundColor: #006400 }}>
      {text}
    </button>
  );
}
