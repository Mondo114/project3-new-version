import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
     
      <Wrapper>
   
        <Route exact path="/" component={Login} />

      </Wrapper>
    
    </div>
  </Router>
);

export default App;
