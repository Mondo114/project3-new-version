<<<<<<< HEAD
import React from "react";
import "./Weather.css";

const Weather = () => (
  <weather className="weather">
    <span>Weather</span>
  </weather>
);
=======
import React from 'react';
import axios from 'axios';
import './Weather.css';
import Forecast from 'react-forecast';


  const Weather = props => (
    <Forecast latitude={props.lat} longitude={props.long} name={props.name} />
  );
>>>>>>> newsAPI

export default Weather;
