import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login/Login.js";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import News from "./components/News";


const App = () => (
  // <Router>
    <div>
      <Header />
      <Wrapper />
      <Login />
   
        {/* <Route exact path="/" component={Login} />

      </Wrapper> */}
    
    </div>
  // {/* </Router> */}
);

export default App;
