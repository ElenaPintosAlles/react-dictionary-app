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
        <footer className="text-center">
          {" "}
          <small>Coded by Elena Pintos Alles</small>{" "}
        </footer>
      </div>
    </div>
  );
}
