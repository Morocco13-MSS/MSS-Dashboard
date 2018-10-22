import React, { Component } from 'react';
import axios from 'axios';
import {Grid, Row, Col, Button} from 'react-bootstrap';

class Patients extends Component {
    constructor () {
        super();
        this.state = {
            age: [],
        }

        this.getPatientsView();
      }
    
      getPatientsView(){
      }

      render() {

        return (
            <div>
                <Grid>
                    <Row className="show-grid">

                        <p>Patients View</p>
                    </Row>
                </Grid>
            </div>
        );
      }
  }

  export default Patients;