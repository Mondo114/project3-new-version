import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Login/Login.js";
import Login from "./components/Login/userLogin"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import ReactDOM from 'react-dom';
import axios from 'axios';



class App extends Component {
  constructor() {
    super();
    var currentUser;
     if(localStorage.length !== 0) {
       currentUser = localStorage.getItem('User');
       axios.post('/Signup', this.state)
       .then((response) => 
        {
             this.changeLoginState()
           }
          
          )
     
  }
  }
state = { 
  isLoggedIn: false,
  newsChoice: "",
  sportsNewsChoice: "",
  specialNewsChoice: "",
  showNewsComp: true,
  showSportsComp: true,
  showSpecialComp: true,
  showWeatherComp: true,
  showStockComp: true,
  showClockComp: true
}

changeLoginState = () => {
  this.setState({
    isLoggedIn: true
  })
}

GuestGreeting(props) {
return (
  <div>
  <Signup changeLoginState={this.changeLoginState}/>
  <Login changeLoginState={this.changeLoginState}/>
  </div>
);
};

Greeting(props) {
  if (props) {
  return this.UserGreeting()
  }
  else {
  return this.GuestGreeting()
  }
};

changeNews = news => {
  this.setState({
    newsChoice: news
  })
}

changeSportsNews = news => {
  this.setState({
    sportsNewsChoice: news
  })
}

changeSpecialNews = news => {
  this.setState({
    specialNewsChoice: news
  })
}

showComp = (selection) => {

  switch(selection) {
  
  case "news":
    this.setState({
      showNewsComp: true
    })
    break;

  case "sports":
    this.setState({
      showSportsComp: true
    })
    break;

  case "weather":
    this.setState({
      showWeatherComp: true
    })
    break;

  case "special":
    this.setState({
      showSpecialComp: true
    })
    break;

  case "stock":
    this.setState({
      showStockComp: true
    })
    break;

    case "clock":
    this.setState({
      showClockComp: true
    })
    break;
  }
}

resetNewsComp = () => {
  this.setState({
    showNewsComp: false
  })
}
resetSportsComp = () => {
  this.setState({
    showSportsComp: false
  })
}

resetSpecialComp = () => {

  this.setState({
    showSpecialComp: false
  })
}

resetWeatherComp = () => {
  this.setState({
    showWeatherComp: false
  })
}
resetStockComp = () => {
  this.setState({
    showStockComp: false
  })
}
resetClockComp = () => {
  this.setState({
    showClockComp: false
  })
}

  render() {
    console.log(this.state)
    return (

      <div>
        <Header showComp={this.showComp} changeNews={this.changeNews} changeSportsNews={this.changeSportsNews} changeSpecialNews={this.changeSpecialNews}/>
        <div id="meat">
          {this.Greeting(this.state.isLoggedIn)}
        </div>
        <Footer />
      </div>
    )
  }

  UserGreeting(props) {
    return <Wrapper state={this.state} showComp={(selection) => this.showComp} resetNewsComp={this.resetNewsComp} 
    resetSportsComp={this.resetSportsComp} resetSpecialComp={this.resetSpecialComp} resetWeatherComp={this.resetWeatherComp} 
    resetStockComp={this.resetStockComp} newsChoice={this.state.newsChoice} sportsNewsChoice={this.state.sportsNewsChoice} 
    resetClockComp={this.resetClockComp} specialNewsChoice={this.state.specialNewsChoice}/>;
  };
};


export default App;
