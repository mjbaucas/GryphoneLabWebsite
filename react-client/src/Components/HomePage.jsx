import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Carousel, Row, Col, Panel } from 'react-bootstrap';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.renderProjectList = this.renderProjectList.bind()
    }
    renderProjectList() {
        var projectList = [
            {'name': 'HearBeat Monitoring', 'decription': "A heart rate monitor through a smartphone application... "},
            {'name': 'Drone Control', 'decription': "Testing of smartphones along with drones to provide connectivity in emergency situation..."}
        ];
        
        return (
            <div>
            {projectList.map(function(obj, id){
                return (
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title toggle>{obj.name}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                            {obj.decription}
                        </Panel.Body>
                    </Panel>
                )
            })}
            </div>
        )
    }

    render() {
        return (
            <Grid className="home-wrapper">
                <Row>
                    <Col><Jumbotron>
                        <h1>GryPhone Lab</h1>
                        <p>
                            Have a great idea for an Android App? Join us to start evaluating it!
                        </p>
                        <p>
                            <Button bsStyle="more" href="/#/about">Learn more</Button>
                        </p>
                    </Jumbotron></Col>
                </Row>
                <Row className="row-eq-height">
                    <Col xs={12} sm={4} md={4} className="col-left">
                        <Panel bsStyle="home">
                            <Panel.Heading>
                                Current Projects
                            </Panel.Heading>
                            <Panel.Body>
                                {this.renderProjectList()}
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col xs={12} sm={8} md={8} className="col-right">
                        <Panel bsStyle="home"><Panel.Body>
                            Random Content Number 2
                        </Panel.Body></Panel>
                    </Col>
                </Row>
                {/*<Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://placehold.it/900x500?text=IMAGE" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://placehold.it/900x500?text=IMAGE" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://placehold.it/900x500?text=IMAGE" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>*/}
            </Grid>
        )
    }
}

export default HomePage;