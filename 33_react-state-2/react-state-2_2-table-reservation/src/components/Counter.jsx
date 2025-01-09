export default function Counter({ people, onAddPeople, onSubPeople }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onAddPeople}
          disabled={people > 6 ? true : false}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onSubPeople}
          disabled={people < 1 ? true : false}
        >
          -
        </button>
      </div>
    </>
  );
}
