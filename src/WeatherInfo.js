import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <p className="card-text" id="current-date">
            <FormattedDate date={props.data.date} />
          </p>
          <p class="card-text" id="current-time"></p>
          <p className="card-text" id="weather-description">
            {props.data.description}
          </p>
        </div>
        <div className="col-2 text-center">
          <span role="img" className="mainEmoji" aria-label="sun">
            ☀
          </span>
        </div>
        <div class="col">
          <span class="mainTemp" id="current-temp">
            {Math.round(props.data.temperature)}
          </span>
          <span className="active" id="F">
            °F
          </span>
          <span class="unit">|</span>
          <span className="active" id="C">
            °C
          </span>
          <p class="card-text-right">
            <span id="humidity">Humidity </span>
            {props.data.humidity}%
          </p>
          <p class="card-text-right">
            Wind <span id="wind"></span>
            {Math.round(props.data.wind)}mph
          </p>
        </div>
      </div>
    </div>
  );
}
