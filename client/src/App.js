import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login/Login.js";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Weather from "./components/Weather";

const App = () => (
  <Router>
    <div>
     
      <Wrapper>
   
        <Route exact path="/" component={Login} />
        <Route exact path="/" component={Weather} />
       
        <Route exact path="/" component={Header} />
       
       

      </Wrapper>
    
    </div>
  </Router>
);

export default App;
