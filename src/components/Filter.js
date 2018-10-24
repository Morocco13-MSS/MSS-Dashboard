import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
 
import 'react-datepicker/dist/react-datepicker.css';
 
class Filter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: moment('01-01-2018'),
            endDate: moment()
        };
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleUserLevel = this.handleUserLevel.bind(this);
    }

    handleStartDateChange(date) {
        this.setState({
            startDate: date
        });
        this.props.updateFilter({startDate: date.format("YYYY-MM-DD")})
    }

    handleEndDateChange(date) {
        this.setState({
            endDate: date
        });
        this.props.updateFilter({endDate: date.format("YYYY-MM-DD")})
    }

    handleUserLevel(level) {
        this.props.updateFilter({userLevel: level})
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
                            <Button bsSize="xsmall" onClick={() => this.handleUserLevel(1)}>Unit</Button>
                            <Button bsSize="xsmall" onClick={() => this.handleUserLevel(2)}>All Units</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default Filter;