import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Philadelphia" />
      <footer>
        The project is{" "}
        <a
          href="https://github.com/CarlyssaCodes/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        coded by Carlyssa Pierre
      </footer>
    </div>
  );
}
