import React, { useState } from "react";
import FormatDate from "./FormatDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.main.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      mainIcon: "http://openweathermap.org/img/wn/04n@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-wrapper">
        <div className="container">
          <div className="Weather">
            <div className="row">
              <div className="col">
                <form>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search a city..."
                  />
                </form>
                <div className="col">
                  <input className="btn" type="submit" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1>{weatherData.city}</h1>
                <h3>{Math.round(weatherData.temperature)} °F</h3>
                <ul>
                  <li>
                    <FormatDate date={weatherData.date} />
                  </li>
                  <li className="text-capitalize">{weatherData.description}</li>
                  <li>Feels like: {Math.round(weatherData.feelsLike)} F</li>
                  <li>Humidity: {weatherData.humidity} %</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>

              <div className="col">
                <img src={weatherData.mainIcon} alt="cloudy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "80791a0ef9679c89428b222ffd6823ff";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
