import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Grid, Row, Col, Glyphicon, NavDropdown, MenuItem, Media, Form, FormGroup, FormControl} from 'react-bootstrap';
import Login from './Login'

import './Welcome.css'

class Welcome extends Component {

    render() {
        return ( 
            <div>
                <Navbar className="welcomeNavbar" staticTop inverse fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                    Obwervatoire de Cancer Digestif
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Accueil
                    </NavItem>
                    <NavDropdown eventKey={3} title="L'Observatoire" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Management du projet</MenuItem>
                        <MenuItem eventKey={3.2}>Process des services</MenuItem>
                        <MenuItem eventKey={3.3}>Charte de l'observatoire</MenuItem>
                        <MenuItem eventKey={3.4}>Documnents</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Formulaires" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>A - Oesophage - Cardia</MenuItem>
                        <MenuItem eventKey={3.2}>B - Estomac</MenuItem>
                        <MenuItem eventKey={3.3}>C - Duodénum - Pancréas - Voies biliaires</MenuItem>
                        <MenuItem eventKey={3.4}>D - Intestin grêle</MenuItem>
                        <MenuItem eventKey={3.5}>E - Colon - Appendice</MenuItem>
                        <MenuItem eventKey={3.6}>F - Rectum - Anus</MenuItem>
                        <MenuItem eventKey={3.7}>G - Foie primitif</MenuItem>
                        <MenuItem eventKey={3.8}>H - Métastases hépatiques</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={4} href="#">
                        Nous contacter
                    </NavItem>
                    <NavItem eventKey={5} href="#">
                        Forum de discussion
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        Partenaires
                    </NavItem>
                    <NavItem eventKey={7} href="#">
                        <Glyphicon bsClass="glyphicon" glyph="search"/>
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
                <div  className="welcomeHeader"><span>Accueil</span>
                </div>
                <Grid className ='patient_grid'>
                    <Row>
                    <Col xs={10} md={10}>
                        <div>
                            <Media>
                                <Media.Left align="top">
                                <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading>Top aligned media</Media.Heading>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.
                                </p>

                                <p>
                                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus.
                                </p>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Left align="middle">
                                <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading>Middle aligned media</Media.Heading>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.
                                </p>

                                <p>
                                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus.
                                </p>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Left align="bottom">
                                <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading>Bottom aligned media</Media.Heading>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.
                                </p>

                                <p>
                                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus.
                                </p>
                                </Media.Body>
                            </Media>
                        </div>;
                    </Col>
                    <Col xs={2} md={2} className="loginContainer">
                        <Login login = {this.props.login}/>
                    </Col>
                    </Row>
                </Grid>
            </div>   
        )
    }
}
export default Welcome;