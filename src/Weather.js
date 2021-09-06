import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="row">
        <div className="Weather">
          <form>
            <input type="search" />
            <input type="submit" />
          </form>
          <div className="col-6">
            <h1>Philadelphia</h1>
            <h2>68°F</h2>
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
  );
}
