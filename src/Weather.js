import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-wrapper">
      <div className="container">
        <div className="row">
          <div className="Weather">
            <form>
              <input type="search" placeholder="Search a city..." />
              <input className="btn" type="submit" />
            </form>
            <div className="col-6">
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
