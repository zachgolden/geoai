import React, {Component} from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import {login, isLoggedIn} from '../utils/authService'
import {Link} from 'react-router-3';
import Nav from './Nav';
import Footer from './Footer';
import "../stylesheets/About.css"

class About extends Component {

  render() {
    return(
    <div>
      <Nav />
      <Jumbotron>
        <h1>AI in Geoscience</h1>
        <p>
        Our project hopes to help with blur recognition and classification of
        images to avoid manually accessing images. We currently are using
        Machine Learning to help with recognition and hope that this is helpful
        for others!
        </p>
        <p>
          {
            ( isLoggedIn() ) ? <Link to="/files">Go to File Directory</Link> :  (<Button bsStyle="primary" onClick={() => login()}>Login</Button>)
          }
        </p>
      </Jumbotron>
    <Footer />
    </div>
  );
  }
}

export default About;
