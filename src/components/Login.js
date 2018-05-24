/*
Zach Golden
Capstone 2018
Component for login function. Original iteration, unused now due to change to Auth0.
*/
import React, {Component} from 'react';
import {Form, FormGroup, Col, Label, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';
import "../stylesheets/Login.css"

class Login extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      email:'',
      password:'',
		};
	}

  validateForm(){
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    //return <h1>Hello, {this.props.name}</h1>;
    return(
    <div className="Login">
      <Form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email">
          <ControlLabel> Email </ControlLabel>

            <FormControl autoFocus type="email" placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />

        </FormGroup>

        <FormGroup controlId="password">
          <ControlLabel> Password </ControlLabel>
            <FormControl type="password" placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
        </FormGroup>

        <FormGroup>
            <Checkbox> Remember me </Checkbox>
        </FormGroup>

        <FormGroup>

            <Button bsStyle="primary" bsSize="large" type="submit">Sign in</Button>

        </FormGroup>
      </Form>
    </div>
  );
  }
}

export default Login;
