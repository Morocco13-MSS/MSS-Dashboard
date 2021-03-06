import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Config from '../../config/config';
import './navHeader.css'

class NavHeader extends Component {

    logout(){
        this.props.logout();
    }
    render() {
        return (
            <Navbar staticTop inverse className="headerNav">
            <Navbar.Header>
                <Navbar.Brand>
                Observatoire de Cancer Digestif
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

                 <Nav pullRight>
                    <NavItem>
                        Hi, Dr. {Config.userName}
                    </NavItem>
                    <NavItem onClick={() => this.logout()}>
                        Se déconnecter
                    </NavItem>
                </Nav>

            </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavHeader;