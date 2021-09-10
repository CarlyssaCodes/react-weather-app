import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thur</div>
            <WeatherIcon code="01d" size={35} />
            <div className="WeatherForecast-temps">
              <span className="WeatherForecast-temp-min">10°</span>
              <span className="WeatherForecast-temp-max">19°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
