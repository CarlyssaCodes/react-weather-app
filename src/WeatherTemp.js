import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemp">
        <h3 className="temperature">{Math.round(props.fahrenheit)}</h3>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemp">
        <h3 className="temperature">{Math.round(celsius)}</h3>
        <span className="unit">
          <a href="/" onClick={convertToFahrenheit}>
            °F{" "}
          </a>
          | °C
        </span>
      </div>
    );
  }
}
