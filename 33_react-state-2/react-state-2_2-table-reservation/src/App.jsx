import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(2);

  const tableSizeMin = 1;
  const tableSizeMax = 6;

  function addingPeople() {
    if (people < tableSizeMax) {
      setPeople(people + 1);
    }
    return;
  }
  function subtractingPeople() {
    if (people > tableSizeMin) {
      setPeople(people - 1);
    }
    return;
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        people={people}
        onAddPeople={addingPeople}
        onSubPeople={subtractingPeople}
      />
      <p>You are going to reserve a table for {people} people.</p>
      {people <= tableSizeMin || people >= tableSizeMax ? (
        <p>
          Please, choose a number beetween {tableSizeMin} and {tableSizeMax}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
