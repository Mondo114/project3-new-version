
import React from 'react';
import axios from 'axios';
import './Weather.css';
<<<<<<< HEAD
// import Forecast from 'react-forecast';
=======
//import Forecast from 'react-forecast';
>>>>>>> loginDatabase-3




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
      const icon = res.data.weather[0].icon;
      const description = res.data.weather[0].description;
      const main = res.data.weather[0].main;
      const temp = res.data.main.temp;
      const humidity = res.data.main.humidity;
      
      
      this.setState({ 
        main: res.data.weather[0].main,
        icon: res.data.weather[0].icon,
        description: res.data.weather[0].description,
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
      });
      console.log(temp);
      
      
    })
  }



render() {
  return (
    <div class="col-sm-4">
        
          <div class="panel panel-default">
            <div class="panel-heading">
              <h2 class="panel-title">WEATHER</h2>
            </div>
            <div class="panel-body">
            <p>Current Weather: {this.state.main}</p>
            <p>Temperature: {this.state.temp}</p>
            <p>Humidity: {this.state.humidity}</p>
            <p>{this.state.icon}</p>
            <p>{this.state.description}</p>
            </div>
          </div>
        
      </div>
  );
}
 }

  




<<<<<<< HEAD
=======
  //const Weather = props => (
   // <Forecast latitude={props.lat} longitude={props.long} name={props.name} />
 // );
>>>>>>> loginDatabase-3


export default Weather;
