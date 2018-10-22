import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavHeader extends Component {
    render() {
        return (
            <Navbar staticTop inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    Obwervatoire de Cancer Digestif
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav activeKey={1}>
                <NavItem eventKey={1}>
                    Colon
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Rectum
                </NavItem>
                <NavItem eventKey={3} href="#">
                    Oesophage Cardia
                </NavItem>
                <NavItem eventKey={4} href="#">
                    L'Estomac
                </NavItem>
                <NavItem eventKey={5} href="#">
                    Grêle
                </NavItem>
                </Nav>

            </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavHeader;