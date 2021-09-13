import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <h1>{props.data.city}</h1>
          <WeatherTemp fahrenheit={props.data.temperature} />

          <ul>
            <li>
              <FormatDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Feels like: {Math.round(props.data.feelsLike)} F</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>

        <div className="col">
          <WeatherIcon code={props.data.mainIcon} size={80} />
        </div>
      </div>
    </div>
  );
}
