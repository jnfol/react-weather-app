import React from "react";
import "./WeekForecast.css";
import axios from "axios";

export default function WeekForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "ec9e75b17376fa49b77d7bbec7d4c57f";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=imperial`;
  axios.get(apiURL).then(handleResponse);
  return (
    <div className="WeekForecast">
      <div className="row">
        <div className="col">
          <div className="WeekForecast-day">Thu</div>
          <div className="WeekForecast-icon">☀</div>
          <div className="WeekForecast-temp">
            <span id="high">95°</span>|<span id="low">65°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
