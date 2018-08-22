import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <Navbar collapseOnSelect bsStyle='gryphone'>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Gryphone Lab</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/">
                            <NavItem eventKey={1} >
                                Home
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <NavItem eventKey={2} >
                                About
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/experiments">
                            <NavItem eventKey={3} >
                                Experiments
                            </NavItem>
                        </LinkContainer>
                        {/*<li className={this.getNav('/contacts')} ><NavLink to="/contacts"  id="contact" onClick={this.setNav}>Contact</NavLink></li>
                        <li className={this.getNav('/sponsors')} ><NavLink to="/sponsors"  id="sponsor" onClick={this.setNav}>Sponsors</NavLink></li>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Navigation);