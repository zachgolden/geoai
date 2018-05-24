/*
Zach Golden
UNUSED with change to Auth0...
*/
import React {Component} from 'react';
import {Form, FormGroup, Modal, Jumbotron} from 'react-bootstrap';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       fName: '',
       lName: '',
       email: '',
       password: ''
    };
  }

  render(){
    return(
      <div className="Register">
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
