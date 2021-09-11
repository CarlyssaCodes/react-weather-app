import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "80791a0ef9679c89428b222ffd6823ff";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
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
