import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSDoublePie from '../../charts/MSSDoublePie'
import './PatientsDashboard.css'

class BMI extends Component {
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
                    <h4>{'IMC <18 or IMC>30'}
                        { !this.props.hide_dr && this.props.drBMI &&
                            <span className='dr_result'>{this.props.drBMI}</span>
                        }
                    </h4>
                    <MSSDoublePie data1={this.props.data1} 
                    data2={this.props.data2}
                    centerText={this.props.centerText} 
                    centerText2={this.props.centerText2} 
                    total = {this.props.total} 
                    lt18 = {this.props.lt18}
                    gt30 = {this.props.gt30}/>

                    <div className="squareLeft_2">
                        <div className="name"> {'<18'}</div>
                        <div className="bmi_value">{this.props.lt18}</div>
                    </div>
                    <div className="squareLeft_2">
                        <div className="name"> {'>30'}</div>
                        <div className="bmi_value">{this.props.gt30}</div>
                    </div>
                    <div className="squareLeft_2">
                        <div className="name">{'Autres'}</div>
                        <div className="value">{this.props.other}</div>
                    </div>
                    <div className="squareLeft_2">
                        <div className="name">{'Missing'}</div>
                        <div className="value">{this.props.missing}</div>
                    </div>
                    <div className="squareRight_2">
                        <div className="name">Total</div>
                        <div className="value">{this.props.total}</div>
                    </div>
                </Panel.Body>
            </Panel>
        );
    }
  }

  export default BMI;