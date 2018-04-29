import React from "react";
import "./Clock.css";
//import Clock from 'react-clock';
 

class Clock extends React.Component {
  state = {
    clock: [],
    // showWidgit: true
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

  // clickExit() {
  //   this.setState({
  //     showWidgit: false
  //   })
  // }

  render() {
    return (
      // <div>
      //   {this.state.showWidgit?
        <div class="card">
          <div class="card-header clock-header">
            {/* <div class="x-box" onClick={()=>this.clickExit()}>
              <p class="x-letter">x</p>
            </div> */}
            <h2>Clock</h2>
          </div>
        <p className="clock">
          The time is {this.state.time}.
        </p>
        </div>
      //   :null}
      // </div>
    );
  }
}

export default Clock;