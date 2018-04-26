import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
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
    event.preventDefault();
    console.log(this.state)
    axios.post('/login', this.state)
    .then(function(response){
        console.log(response)
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
