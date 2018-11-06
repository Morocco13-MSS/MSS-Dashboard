import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Grid, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css'
 
class Filter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: moment(new Date('2018', '00', '01')),
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
                <Row>
                    <Col xs={3} md={3}>
                        De:
                        <DatePicker className="form-control"
                        
                            selected={this.state.startDate}
                            onChange={this.handleStartDateChange}
                        />
                    </Col>
                    <Col xs={3} md={3}>
                        Jusqu'à:
                        <DatePicker className="form-control"
                            selected={this.state.endDate}
                            onChange={this.handleEndDateChange}
                        />
                    </Col>
                    <Col xs={4} md={4}>
                        <ButtonToolbar className='filterButton'>
                            <Button bsStyle="info" onClick={() => this.handleUserLevel(0)}>Moi</Button>
                            <Button bsStyle="primary" onClick={() => this.handleUserLevel(1)}>Mon service</Button>
                            <Button bsStyle="success" onClick={() => this.handleUserLevel(2)}>Tous</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default Filter;