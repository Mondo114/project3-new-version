import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./userLogin.css";
import axios from 'axios';

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }


  handleInputChange = event => {
    this.setState({
        [event.target.id]: event.target.value
      });
  };

  handleFormSubmit = event => {
    localStorage.setItem('User', this.state.email);
    localStorage.setItem('User', this.state.password);
    // this.props.changeLoginState() // run this line when you authenticate user
    event.preventDefault();
    // console.log(this.state)
    axios.post('/Login', this.state)
    .then((response) => {
        console.log("res", response)
        if (response.data !== "you suck"){
          this.props.changeLoginState()
        }
        else {
          console.log("wrong")
          alert("Wrong Username and/or Password")
        }
       
    })
    .catch(function(err){
        console.log(err)
    })

  };
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleFormSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </FormGroup>
         
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;