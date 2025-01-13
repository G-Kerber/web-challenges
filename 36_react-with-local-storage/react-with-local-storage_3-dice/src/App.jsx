import useLocalStorageState from "use-local-storage-state";
import { getD6Roll } from "./utils.jsx";
import { D6Button } from "./components/D6Button/index.jsx";
import History from "./components/History/index.jsx";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("roll", {
    defaultValue: [],
  });

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
