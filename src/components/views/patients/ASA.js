import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSPie from '../../charts/MSSPie'
import './PatientsDashboard.css'

class ASA extends Component {
    constructor () {
        super();
        this.state = {
            colors: ['#00C49F', '#999', '#999'],
        }
      }

    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>Patients ASA > 2
                        { !this.props.hide_dr && this.props.drASA &&
                            <span className='dr_result'>{this.props.drASA}</span>
                        }
                    </h4>
                    <MSSPie data={this.props.data} 
                    colors={this.state.colors} 
                    centerText={this.props.centerText} 
                    centerText2={this.props.centerText2} />

                    <div className="squareLeft">
                        <div className="name"> {'>2'}</div>
                        <div className="asa_value">{this.props.gt2}</div>
                    </div>
                    <div className="squareLeft">
                        <div className="name"> {'≤2'}</div>
                        <div className="value">{this.props.lt2}</div>
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