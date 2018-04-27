import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';

class Signup extends Component {
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
    localStorage.setItem('User', this.state.email);
    console.log(this.state);
    // this.props.changeLoginState() // run this line when you authenticate user
    event.preventDefault();
    // console.log(this.state)
    axios.post('/Signup', this.state)
    .then((response) => {
        console.log("res", response)
        if (response.status === 200){
          this.props.changeLoginState()
        }
       
    })
    .catch(function(err){
        console.log(err)
    })

  };
  render() {
    return (
      <div className="Signup">
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
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="name"
              value={this.state.name}
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
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
