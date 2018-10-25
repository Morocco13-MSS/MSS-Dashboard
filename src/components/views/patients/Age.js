import React, { Component } from 'react';
import {Panel, Grid, Row, Col} from 'react-bootstrap';
import MSSPie from '../../charts/MSSPie'
import './PatientsDashboard.css'

class Age extends Component {
    constructor () {
        super();
        this.state = {
            colors: ['#0088FE', '#999', '#999'],
        }
      }

    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>Patients age ≥ 70</h4>
                    <MSSPie data={this.props.data} 
                            colors={this.state.colors} 
                            centerText={this.props.centerText} 
                            centerText2={this.props.centerText2} />
                    <div className="squareLeft">
                        <div className="name"> {'≥70'}</div>
                        <div className="age_value">{this.props.gt70}</div>
                    </div>
                    <div className="squareLeft">
                        <div className="name"> {'<70'}</div>
                        <div className="value">{this.props.lt70}</div>
                    </div>
                    <div className="squareLeft">
                        <div className="name">{'Missing'}</div>
                        <div className="value">{this.props.missing}</div>
                    </div>
                    <div className="squareRight">
                        <div className="name">Total</div>
                        <div className="value">{this.props.total}</div>
                    </div>
                </Panel.Body>
            </Panel>
        );
    }
  }

  export default Age;