import React, { Children } from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me!</Button>
      <Button>I&#39;m a Button</Button>
      <Button>Don&#39;t push me!</Button>
      <Button>Drück mich!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
