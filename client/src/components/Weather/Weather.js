import React from 'react';
import axios from 'axios';
import './Weather.css';
import Forecast from 'react-forecast';


  const Weather = props => (
    <Forecast latitude={props.lat} longitude={props.long} name={props.name} />
  );

export default Weather;
