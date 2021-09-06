import React from "react";
import axios from "axios";

export default function WeatherInfo() {
  const apiKey = "80791a0ef9679c89428b222ffd6823ff";
  let city = "Philadelphia";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
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
              <h1>Philadelphia</h1>
              <h3>68°F</h3>
              <ul>
                <li>Sunday 10:14pm</li>
                <li>Overcast Clouds</li>
                <li>Feels Like: 87°F</li>
                <li>Humidity: 65%</li>
                <li>Wind: 2km/h</li>
              </ul>
            </div>

            <div className="col">
              <img
                src="http://openweathermap.org/img/wn/04n@2x.png"
                alt="cloudy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
