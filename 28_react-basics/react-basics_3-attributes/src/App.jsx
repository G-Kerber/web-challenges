import "./styles.css";

export default function App() {
  return article();
}

function article() {
  return (
    <article className="article">
      Replace me with an article
      <h2 className="article__title">something like a title</h2>
      <label htmlFor="color">Enter your favorite color:</label>
      <input type="text" id="color" name="color" required minLength="3"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Model_View_Controller"
      >
        Model View Controller
      </a>
    </article>
  );
}
