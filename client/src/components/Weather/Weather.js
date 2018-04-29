
import React from 'react';
import axios from 'axios';
import './Weather.css';
//import Forecast from 'react-forecast';




//const API_URL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}"
//const API_KEY = "001ab0b7efc2baeae3d7cdf13d00c7e8";

 class Weather extends React.Component {
  state = {
    weather: []
  }

  componentDidMount() {
    console.log("componentDidMount")
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Los+Angeles&units=imperial&appid=001ab0b7efc2baeae3d7cdf13d00c7e8")
    .then(res => {
      console.log(res.data)
      //const description = res.data.weather[0].description;
      const main = res.data.weather[0].main;
      const icon = res.data.weather[0].icon;
      const temp = res.data.main.temp;
      const humidity = res.data.main.humidity;
      
      
      
      this.setState({ 
        main: res.data.weather[0].main,
        icon: 'https://openweathermap.org/img/w/' + res.data.weather[0].icon + '.png',
        //description: res.data.weather[0].description,
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
      });
      console.log(temp);
      
      
    })
  }



render() {
  return (

          <div class="card">
            <div class="card-header weather-header">
              <h2>Weather</h2>
            </div>
           <div class="card-body">
            <p>Current Weather: {this.state.main}</p>
            <p>Temperature: {this.state.temp} F</p>
            <p>Humidity: {this.state.humidity} %</p>
            <p><img src={this.state.icon}/></p>
            </div>
          </div>
  );
}
 }



export default Weather;
