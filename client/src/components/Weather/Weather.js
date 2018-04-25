import React from "react";
import "./Weather.css";

const Weather = () => (
  <div class="col-sm-4">
        
          <div class="panel panel-default">
            <div class="panel-heading">
              <h2 class="panel-title">WEATHER</h2>
            </div>
            <div class="panel-body">
              <weather className="weather">
                <span>Weather</span>
              </weather>
            </div>
          </div>
        
      </div>
);

export default Weather;
