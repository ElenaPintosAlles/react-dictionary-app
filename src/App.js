import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            Coded by Elena Pintos Alles <br />
            <a href="https://github.com/ElenaPintosAlles/react-dictionary-app">
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
