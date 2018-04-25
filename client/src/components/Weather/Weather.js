
import React from 'react';
import axios from 'axios';
import './Weather.css';
// import Forecast from 'react-forecast';

const Weather = () => (
  <div class="col-sm-4">
        
          <div class="panel panel-default">
            <div class="panel-heading">
              <h2 class="panel-title">WEATHER</h2>
            </div>
            <div class="panel-body">
            <p>Cold!</p>
            </div>
          </div>
        
      </div>
);




  // const Weather = props => (
  //   <Forecast latitude={props.lat} longitude={props.long} name={props.name} />
  // );


export default Weather;
