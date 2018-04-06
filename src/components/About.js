import React, {Component} from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import "../stylesheets/About.css"

class About extends React.Component {

  render() {
    var style = {
      
    };

    return(
      <Jumbotron >
        <h1>AI in Geoscience</h1>
        <p>
        Our project hopes to help with blur recognition and classification of
        images to avoid manually accessing images. We currently are using
        Machine Learning to help with recognition and hope that this is helpful
        for others!
        </p>
        <p>
          <Button bsStyle="primary">Register</Button>
        </p>
      </Jumbotron>
  );
  }
}

export default About;
