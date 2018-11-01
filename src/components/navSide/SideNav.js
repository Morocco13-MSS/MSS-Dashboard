import React, { Component } from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';
import './SideNav.css';


class Hello extends Component {

    render() {
        return (
            <SideNav className ='sideNav'
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="global">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Link to="/global">Global</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="patients">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Link to="/patients">Patients</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="preoperative">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Link to="/preoperative">Préopératoire</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="surgery">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Link to="/surgery">Chirurgie</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="morbiMrtalite">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Link to="/morbi-mortalite">Morbi-Mortality</Link>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        )
    }
}
export default Hello;