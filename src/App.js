import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        The project is{" "}
        <a
          href="https://github.com/CarlyssaCodes/react-weather-app"
          target="_blank"
        >
          open-sourced
        </a>{" "}
        coded by Carlyssa Pierre
      </p>
    </div>
  );
}
