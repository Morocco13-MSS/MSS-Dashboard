import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import NavSide from './navSide';
import Charts from './charts';

class Dashboard extends Component {

    render() {
      return (
        <Grid>
            <Row className="show-grid">
                <Col xs={3} md={3}>
                    <NavSide/>
                </Col>
                <Col xs={9} md={9}>
                    <Charts/>
                </Col>
            </Row>
        </Grid>
      );
    }
  }

export default Dashboard;