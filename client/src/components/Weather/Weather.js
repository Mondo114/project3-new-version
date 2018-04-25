
import React from 'react';
import axios from 'axios';



var request = require('axios');


const API_URL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}"
const API_KEY = "001ab0b7efc2baeae3d7cdf13d00c7e8";

 class getWeather extends React.Component {
  state = {
    weather: []
  }

  componentDidMount() {
    axios.get("api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}")
    .then(res => {
      const weather = res.data;
      this.setState({ weather });
      console.log(weather);
    })
  }
}


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
