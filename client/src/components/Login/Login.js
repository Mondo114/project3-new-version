import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    name: "",
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
