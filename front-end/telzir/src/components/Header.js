import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../logo.png';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" className="bar-center">
                <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
            </Navbar>
        )
    }
}
