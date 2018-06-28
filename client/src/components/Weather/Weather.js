import React from 'react';
import axios from 'axios';
import './Weather.css';
//import Forecast from 'react-forecast';

//const API_URL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}"
//const API_KEY = "001ab0b7efc2baeae3d7cdf13d00c7e8";

 class Weather extends React.Component {
  state = {
    weather: [],
    showWidgit: true
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
      if (this.props.showWeatherComp === true) {
      this.setState({ 
        main: res.data.weather[0].main,
        icon: 'https://openweathermap.org/img/w/' + res.data.weather[0].icon + '.png',
        //description: res.data.weather[0].description,
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
        showWidgit: true
      });
    }
      console.log(temp);
    })
  }

  clickExit() {
    this.setState({
      showWidgit: false
    })
    this.props.resetWeatherComp();
  }

  render() {
    return (
      <div>
        {this.state.showWidgit?
          <div class="card">
            <div class="card-header weather-header">
            <div class="x-box" onClick={()=>this.clickExit()}>
              <p class="x-letter">x</p>
            </div>
              <h2 class="widgit-title">Weather</h2>
            </div>
          <div class="card-body weather-body">
            <p id="weather-img"><img src={this.state.icon}/></p>
            <p><strong>Current Weather:</strong><br/> {this.state.main}</p>
            <p><strong>Temperature:</strong><br/> {this.state.temp} F</p>
            <p id="weather-humidity"><strong>Humidity:</strong><br/> {this.state.humidity} %</p>
            </div>
          </div>
          :null}
        </div>
    );
  }
}

export default Weather;
