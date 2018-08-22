import React, { Component } from 'react';
import { Row, Grid, Col } from 'react-bootstrap';


class Experiments extends Component {
  render() {
    return (
      <Grid> 
        <Col>  
        <h1>Experiments</h1>
        <p>The GryPhone Lab is a public smartphone testbed open to researchers and University studetns. 
        We invite researchers to use our testbed to made possible their idea. The Gryphone Lab has facilitated 
        the following smartphone experiments.</p>
        </Col>
        <Col>
          <h3>HeartBeat Monitoring</h3>
          <p>This experiment monitors the heart rate of a user through a smartphone application. 
          The main objective is to analyze electrocardiogram data gathered by the phone's sensors 
          to provide personalized heart monitoring.</p>            
        </Col>
        <Col>
          <h3>Drone Control</h3>
          <p>We examine the use of smartphones along with drones to provide connectivity in emergency 
          situation. A smartphone application can control the drones and provide temporary connectivity</p>            
        </Col>
        <Col>
          <h3>Quality of Experience on Smartphones</h3>
          <p>In this project the student will work with on the Quality of Experience on Smartphones. 
          Specifically, through a number of experiments with smartphone devices of different characteristics 
          (different screen size, screen resolution etc.) the student will evaluate the user experience 
          during a video session. The main goal of the project is to examine the effects of the device 
          characteristics on the user video experience.</p>            
        </Col>
        <Col>
          <h3>More to Come!</h3>
          <p>Have a great idea? We can help you turn it into a successful project!</p>
        </Col>
      </Grid>
    )
  }
}

export default Experiments;