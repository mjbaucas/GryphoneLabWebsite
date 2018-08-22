import React, { Component } from 'react';
import { Row, Grid, Col, Panel, PageHeader, Well } from 'react-bootstrap';


class Experiments extends Component {
    render() {
        return (
            <Grid className="experiments-wrapper"> 
                <Col>
                    <PageHeader>Experiments</PageHeader>
                    <Well>The GryPhone Lab is a public smartphone testbed open to researchers and University studetns. 
                    We invite researchers to use our testbed to made possible their idea. The Gryphone Lab has facilitated 
                    the following smartphone experiments.</Well>
                </Col>
                <Col>
                    <Panel bsStyle="experiments">  
                        <Panel.Heading>HeartBeat Monitoring</Panel.Heading>
                        <Panel.Body><p>This experiment monitors the heart rate of a user through a smartphone application. 
                        The main objective is to analyze electrocardiogram data gathered by the phone's sensors 
                        to provide personalized heart monitoring.</p></Panel.Body>            
                    </Panel>
                </Col>
                <Col>
                    <Panel bsStyle="experiments">
                        <Panel.Heading>Drone Control</Panel.Heading>
                        <Panel.Body><p>We examine the use of smartphones along with drones to provide connectivity in emergency 
                        situation. A smartphone application can control the drones and provide temporary connectivity.</p></Panel.Body>            
                    </Panel>
                </Col>
                <Col>
                    <Panel bsStyle="experiments">
                        <Panel.Heading>Quality of Experience on Smartphones</Panel.Heading>
                        <Panel.Body><p>In this project the student will work with on the Quality of Experience on Smartphones. 
                        Specifically, through a number of experiments with smartphone devices of different characteristics 
                        (different screen size, screen resolution etc.) the student will evaluate the user experience 
                        during a video session. The main goal of the project is to examine the effects of the device 
                        characteristics on the user video experience.</p></Panel.Body>            
                    </Panel>
                </Col>
                <Col>
                    <Panel bsStyle="experiments">
                        <Panel.Heading>More to Come!</Panel.Heading>
                        <Panel.Body><p>Have a great idea? We can help you turn it into a successful project!</p></Panel.Body>
                    </Panel>
                </Col>
            </Grid>
        )
    }
}

export default Experiments;