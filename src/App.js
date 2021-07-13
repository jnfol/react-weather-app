import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import background_video from "./background_video.mp4";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="card bg-dark text-white">
        <video className="videoTag" autoPlay loop muted>
          <source src={background_video} type="video/mp4" />
        </video>
        <div className="card-img-overlay">
          <form>
            <input type="search" />
            <input type="submit" value="Search" />
          </form>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1 className="city">Denver</h1>
                <p className="card-text" id="current-date">
                  Sunday, June 13
                </p>
                <p class="card-text" id="current-time">
                  11:00
                </p>
                <p className="card-text" id="weather-description">
                  Sunny
                </p>
              </div>
              <div className="col-2 text-center">
                <span role="img" className="mainEmoji" aria-label="sun">
                  ☀
                </span>
              </div>
              <div class="col">
                <strong class="mainTemp" id="current-temp">
                  34
                </strong>
                <span className="active" id="F">
                  °F
                </span>
                <span class="unit">|</span>
                <span className="active" id="C">
                  °C
                </span>
                <p class="card-text-right">
                  Humidity <span id="humidity"></span>24%
                </p>
                <p class="card-text-right">
                  Wind <span id="wind"></span>2mph
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <p className="week">
                  Mon <br />
                  <span class="emoji">🌧 </span>
                  <br />
                  <span className="weektemp">47° | 22°</span>
                </p>
              </div>
              <div className="col">
                <p className="week">
                  Tue <br />
                  <span role="img" className="emoji" aria-label="part-cloud">
                    ⛅
                  </span>
                  <br />
                  <span className="weektemp">42° | 24°</span>
                </p>
              </div>
              <div className="col">
                <p className="week">
                  Wed <br />
                  <span role="img" className="emoji" aria-label="snow">
                    ❄
                  </span>
                  <br />
                  <span className="weektemp">37° | 25°</span>
                </p>
              </div>
              <div className="col">
                <p className="week">
                  Thurs <br />
                  <span role="img" className="emoji" aria-label="part-cloud">
                    ⛅
                  </span>
                  <br />
                  <span className="weektemp">49° | 33°</span>
                </p>
              </div>
              <div className="col">
                <p className="week">
                  Fri <br />
                  <span role="img" className="emoji" aria-label="sun">
                    ☀
                  </span>
                  <br />
                  <span className="weektemp">59° | 36°</span>
                </p>
              </div>
            </div>
          </div>
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
