import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Activate");

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
    setButtonLabel(buttonLabel === "Activate" ? "Deactivate" : "Activate");
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{buttonLabel}</button>
    </main>
  );
}
