import React from "react";
import "./Weather.css";

const Weather = () => (
  <weather className="weather">
    <span>Weather</span>
  </weather>
);

const API_KEY = "001ab0b7efc2baeae3d7cdf13d00c7e8";

class weather extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch("api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}");
    //const data = await api_call.json();
    console.log(api_call);
  }
  render() {
    return (
      <weather className="weather">
      <span>Weather</span>
    </weather>
    );
  }

};  




export default Weather;
