import { Header } from "../Header/Header.js";
import { Form } from "../Form/Form.js";
import { CardList } from "../CardList/CardList.js";

// The function built elements to app
export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
