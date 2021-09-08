import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <h1>{props.data.city}</h1>
          <h3>{Math.round(props.data.temperature)} °F</h3>
          <ul>
            <li>
              <FormatDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Feels like: {Math.round(props.data.feelsLike)} F</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>

        <div className="col">
          <img src={props.data.mainIcon} alt="cloudy" />
        </div>
      </div>
    </div>
  );
}
