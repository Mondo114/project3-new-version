import React from "react";
import "./Clock.css";
//import Clock from 'react-clock';
 
class Clock extends React.Component {
  state = {
    clock: []
  }

  

   constructor(props) {

     super(props);

     this.state = {

       time: new Date().toLocaleString()

     };

   }

   componentDidMount() {

     this.intervalID = setInterval(

       () => this.tick(),

       1000

     );

   }

   componentWillUnmount() {

     clearInterval(this.intervalID);

}

   tick() {

     this.setState({

       time: new Date().toLocaleString()

     });

   }

  render() {

    return (
      <div class="card">
        <div class="card-header">
          <h2>Clock</h2>
        </div>

      <p className="clock">

        The time is {this.state.time}.

      </p>
      </div>

    );

  }

}

export default Clock;