import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSPie from '../../charts/MSSPie'
import './PatientsDashboard.css'

class ASA extends Component {
    constructor () {
        super();
        this.state = {
            colors: ['#FFBB28', '#999', '#999'],
        }
      }

    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>Patients OMS > 1</h4>
                    <MSSPie data={this.props.data} 
                    colors={this.state.colors} 
                    centerText={this.props.centerText} 
                    centerText2={this.props.centerText2} />

                    <div className="squareLeft">
                        <div className="name"> {'>1'}</div>
                        <div className="oms_value">{this.props.gt1}</div>
                    </div>
                    <div className="squareLeft">
                        <div className="name"> {'≤1'}</div>
                        <div className="value">{this.props.lt1}</div>
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

  export default ASA;