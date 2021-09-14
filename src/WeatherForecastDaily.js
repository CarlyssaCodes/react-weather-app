import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDaily(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDaily">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div className="WeatherForecast-temps">
        <span className="WeatherForecast-temp-min">{maxTemp()}</span> |
        <span className="WeatherForecast-temp-max">{minTemp()}</span>
      </div>
    </div>
  );
}
