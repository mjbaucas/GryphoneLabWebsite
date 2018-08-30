import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Carousel, Row, Col, Panel } from 'react-bootstrap';

class HomePage extends Component {
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
                <Row>
                    <Col xs={3} md={3}>
                        <Panel><Panel.Body>
                            Random Content Number 1
                        </Panel.Body></Panel>
                    </Col>
                    <Col xs={9} md={9}>
                        <Panel><Panel.Body>
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