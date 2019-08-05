import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                            <NavItem>Home</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/time">
                            <NavItem>Time</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/counter">
                            <NavItem>Counter</NavItem>
                        </LinkContainer>
                        {isAuthenticated && (
                            <LinkContainer to="/private">
                                <NavItem>Private Page</NavItem>
                            </LinkContainer>
                        )}
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/login">
                            <NavItem>Login</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopNav;