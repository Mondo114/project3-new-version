import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login/Login.js";
import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";
import ReactDOM from 'react-dom';



class App extends Component {

state = { 
  isLoggedIn : true
}

changeLoginState(){
  console.log("state changed", this.state)
  this.setState({
    isLoggedIn: true
  })
  console.log("state changed", this.state)
}


UserGreeting(props) {
  return <Wrapper />;
};

GuestGreeting(props) {
  return <Login changeLoginState={this.changeLoginState}/>;
};

Greeting(props) {
  if (props) {
  return this.UserGreeting()
  }
  else {
  return this.GuestGreeting()
  }
};

  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <div id="meat">
          {this.Greeting(this.state.isLoggedIn)}
        </div>
        {/* <Footer /> */}
    
          
      
      </div>
    )
  }
};


export default App;
