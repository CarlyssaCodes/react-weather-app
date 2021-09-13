import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="WeatherForecast-day">{forecast[0].dt * 1000}</div>
              <WeatherIcon code={forecast[0].weather[0].icon} size={35} />
              <div className="WeatherForecast-temps">
                <span className="WeatherForecast-temp-min">
                  {Math.round(forecast[0].temp.max)}°
                </span>{" "}
                |
                <span className="WeatherForecast-temp-max">
                  {Math.round(forecast[0].temp.min)}°
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "80791a0ef9679c89428b222ffd6823ff";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }
  return null;
}
