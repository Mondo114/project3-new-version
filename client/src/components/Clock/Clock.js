import React from "react";
import "./Clock.css";
//import Clock from 'react-clock';
 

class Clock extends React.Component {
  state = {
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

  displayTime() {
    var time = new Date().toLocaleString()
    return time.split(', ')[1]
  }

  // displayDate() {
  //   var date = new Date().toLocaleString()
  //    return date.split(', ')[0]
  // }

  tick() {
    var time = this.displayTime()
    // var date = this.displayDate()
      this.setState({
      time: time,
      // date: date,
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
            <h2 class="widgit-title">Clock</h2>
          </div>
          <div class="card-body clock-body">
            <p id="clock-display-title">
              <strong>{this.state.time}</strong>
            </p>
          </div>
        </div>
        :null}
      </div>
    );
  }
}

export default Clock;