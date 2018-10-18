import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import NavSide from './navSide';
import Charts from './charts';

class Dashboard extends Component {

    render() {
      return (
        <Grid>
            <Row className="show-grid">
                <Col xs={4} md={4}>
                    <NavSide/>
                </Col>
                <Col xs={8} md={8}>
                    <Charts/>
                </Col>
            </Row>
        </Grid>
      );
    }
  }

export default Dashboard;