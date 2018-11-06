import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';
import './SideNav.css';


class Hello extends Component {

    render() {
        return (
            <SideNav 
                className ='sideNav'
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="global">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            <Link to="/global"><Glyphicon className="sideNavIcon" bsClass="glyphicon" glyph="globe"/></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/global">Global</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="patients">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            <Link to="/patients"><Glyphicon className="sideNavIcon" bsClass="glyphicon" glyph="user"/></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/patients">Patients</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="preoperative">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            <Link to="/preoperative"><Glyphicon className="sideNavIcon" bsClass="glyphicon" glyph="check"/></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/preoperative">Préopératoire</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="surgery">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            <Link to="/surgery"><Glyphicon className="sideNavIcon" bsClass="glyphicon" glyph="eye-open"/></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/surgery">Chirurgie</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="traitementAdjuvant">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            <Link to="/traitementAdjuvant"><Glyphicon className="sideNavIcon" bsClass="glyphicon" glyph="leaf"/></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/traitementAdjuvant">Traitement-Adjuvant</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="morbiMrtalite">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            <Link to="/morbi-mortalite"><Glyphicon className="sideNavIcon" bsClass="glyphicon" glyph="stats"/></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/morbi-mortalite">Morbi-Mortality</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="cusum">
                        <NavIcon>
                            <i className="fa fa-area-chart" style={{ fontSize: '1.75em' }} />
                            <Link to="/cusum"><Glyphicon className="sideNavIcon" bsClass="glyphicon" glyph="gift"/></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/cusum">CUSUM</Link>
                        </NavText>
                    </NavItem>


                </SideNav.Nav>
            </SideNav>
        )
    }
}
export default Hello;