import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, SetCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      mainIcon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "80791a0ef9679c89428b222ffd6823ff";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchedCity(event) {
    SetCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-wrapper">
        <div className="Weather">
          <div className="row">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search a city..."
                  onChange={handleSearchedCity}
                />
                <input className="btn" type="submit" />
              </form>
              <WeatherInfo data={weatherData} />
              <WeatherForecast />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
