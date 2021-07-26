import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import background_video from "./background_video.mp4";
import "bootstrap/dist/css/bootstrap.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="card bg-dark text-white">
        <video className="videoTag" autoPlay loop muted>
          <source src={background_video} type="video/mp4" />
        </video>
        <div className="card-img-overlay">
          <WeatherSearch defaultCity="Denver" />
        </div>
      </div>
      <footer>
        Coded by{" "}
        <a href="https://github.com/jnfol/react-weather-app" target="blank">
          Jessi Follett
        </a>
      </footer>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
