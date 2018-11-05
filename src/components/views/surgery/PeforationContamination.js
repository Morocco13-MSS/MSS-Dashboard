import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSBar from '../../charts/MSSBar';
import './SurgeryDashboard.css'

class PeforationContamination extends Component {
    constructor () {
        super();
        this.state = {
            colors: ["#1f77b4", "#8884d8"]
        }
    }
    render() {

        return (
            <Panel>
            <Panel.Body>
                <h4>{'Peforation & Contamination'}</h4>
         
                <MSSBar
                data={this.props.data}
                colors={this.state.colors}
                key1={this.props.key1} 
                key2={this.props.key2} 
                key3={this.props.key3}
                width={450}
                height={250}
                />
                <div className="squarePefCon">
                    <div className="squareLeftPefCon">
                        <div className="namePreo"> {'Perforation (%)'}</div>
                        <div className="PefCon_Pef_value">
                            {((this.props.perforation_adherent/this.props.perforation_total)*100).toFixed(0)}
                        </div>
                    </div>
                    <div className="squareRightPefCon">
                        <div className="namePreo"> {'Contamination (%)'}</div>
                        <div className="PefCon_Con_value">
                            {((this.props.contamination_adherent/this.props.contamination_total)*100).toFixed(0)}
                        </div>
                    </div>
                </div>
                </Panel.Body>
            </Panel>
        );
    }
  }
  export default PeforationContamination;