import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
 
import 'react-datepicker/dist/react-datepicker.css';
 
class Cal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment().format("YYYY-MM-DD"),
      endDate:  moment().format("YYYY-MM-DD")
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }
 
  handleStartDateChange(date) {
    this.setState({
      startDate: date.format("YYYY-MM-DD")
    });
    this.props.getPatientsGlobal2({startDate: date.format("YYYY-MM-DD")})
  }

  handleEndDateChange(date) {
    this.setState({
        endDate: date.format("YYYY-MM-DD")
    });
    this.props.getPatientsGlobal2({endDate: date.format("YYYY-MM-DD")})
  }
 
  render() {
    return (
        <Grid>
            <Row className="show-grid">
                <Col xs={2} md={2}>
                    from:
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleStartDateChange}
                    />
                </Col>
                <Col xs={2} md={2}>
                    to:
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleEndDateChange}
                    />
                </Col>

                <Col xs={2} md={2}>
                    <div>compaire to: </div>
                    <ButtonToolbar>
                        <Button bsSize="xsmall" >Unit</Button>
                        <Button bsSize="xsmall">All Unit</Button>
                    </ButtonToolbar>
                </Col>
                <Col xs={4} md={4}>
                   
                </Col>


            </Row>
        </Grid>
    );
  }
}

export default Cal;