import React from "react";
import "./Clock.css";
//import Clock from 'react-clock';
 

class Clock extends React.Component {
  state = {
    clock: [],
    showWidgit: true
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
    if (this.props.showClockComp === true) {
    this.setState({
      showWidgit: true
    
    })
  }
}

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  clickExit() {
    this.setState({
      showWidgit: false
    })
    this.props.resetClockComp();
  }

  render() {
    return (
      <div>
        {this.state.showWidgit?
        <div class="card">
          <div class="card-header clock-header">
            <div class="x-box" onClick={()=>this.clickExit()}>
              <p class="x-letter">x</p>
            </div>
            <h2>Clock</h2>
          </div>
          <div class="card-body">
            <p id="clock-display-title">
              <strong>Date, time:</strong>
            </p>
            <p id="clock-display">
              {this.state.time}
            </p>
          </div>
        </div>
        :null}
      </div>
    );
  }
}

export default Clock;