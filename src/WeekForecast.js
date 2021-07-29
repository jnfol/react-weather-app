import React from "react";
import "./WeekForecast.css";

export default function WeekForecast() {
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
