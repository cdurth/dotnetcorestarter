﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class TopNav extends Component {
    render() {
        const { isAuthenticated } = this.props.CurrentUser;
        console.log('isAuthenticated:', isAuthenticated);
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" >dotnetcorestarter</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/">
                            <NavItem eventKey={1}>
                                Home
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/time">
                            <NavItem eventKey={2}>
                                Time
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/counter">
                            <NavItem eventKey={3}>
                                Counter
                            </NavItem>
                        </LinkContainer>
                        {isAuthenticated && (
                            <LinkContainer to="/private">
                                <NavItem eventKey={4}>
                                    Private API
                            </NavItem>
                            </LinkContainer>
                        )}
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/login">
                            <NavItem eventKey={4} href="#">Login</NavItem>
                        </LinkContainer>
                        <NavItem eventKey={5} href="#">Signup</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopNav;