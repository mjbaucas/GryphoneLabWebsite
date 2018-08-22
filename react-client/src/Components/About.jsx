import React, { Component } from 'react';
import { Row, Grid, Col, Panel, PageHeader } from 'react-bootstrap';


class About extends Component {
    render() {
        return (
            <Grid>
                <Col>
                    <PageHeader>About</PageHeader>
                </Col>
                <Col>
                    <Panel>
                    <Panel.Heading>Who We Are</Panel.Heading>
                    <Panel.Body>The GryPhone Lab is an open-access smartphone testbed at the University of Guelph. 
                    Out goal is to explore and develop high-impact applicaitons of mobile technology in a  
                    range of disciplines, bringing together people capable of programming these devices 
                    with others who can make new and novel uses of them.<br></br>
                    The GryPhone Lab is run by Dr. Petros Spachos and developed by graduate and undergraduate 
                    students in the University of Guelph at the School of Engineering. You can find us in Richards 
                    Building 301B, and on Facebook.</Panel.Body>
                    </Panel>
                </Col>
                <Col> 
                    <Panel>
                    <Panel.Heading>What We Do</Panel.Heading>
                    <Panel.Body>The GryPhone Lab is a smartphone testbed designed to neable mobile systems research 
                    that cannot be done in any other way. We enable researchers to instrument and experiment 
                    with the android platform itself, a million-line codebase that runs on billions of devices 
                    worldwide.<br></br>
                    The GryPhone Lab supports short-term projects in a graduate course open to all graduate 
                    students at the University of Guelph, and engages in long-term collaborative research projects. 
                    Feel free to contact us if you have a great new idea for Android platform features.</Panel.Body>
                    </Panel>
                </Col>
                <Col>
                    <Panel>
                    <Panel.Heading>Our Sponsors</Panel.Heading>
                    <Panel.Body>We gratefully thank our sponsors for their support.</Panel.Body>
                    </Panel>
                </Col>
            </Grid>
        )
    }
}

export default About;