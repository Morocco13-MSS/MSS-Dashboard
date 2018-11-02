import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSBar from '../../charts/MSSBar';
import './SurgeryDashboard.css'

class RadGan extends Component {
    constructor () {
        super();
        this.state = {
            colors: ["#e2a623", "#00C49F"]
        }
    }
    render() {
        console.log(this.props);
        return (
            <Panel>
            <Panel.Body>
                <h4>{'Radicalite & Ganglions'}</h4>
         
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
                    <div className="squareLeftRadGan">
                        <div className="namePreo"> {'Perforation R1 (%)'}</div>
                        <div className="RadGan_Rad_value">
                            {((this.props.radicalityR1/this.props.rad_total)*100).toFixed(0)}
                        </div>
                    </div>
                    <div className="squareRightRadGan">
                        <div className="namePreo"> {'Contamination 12 (%)'}</div>
                        <div className="RadGan_Gan_value">
                            {((this.props.countgt12/this.props.con_total)*100).toFixed(0)}
                        </div>
                    </div>
                </div>
                </Panel.Body>
            </Panel>
        );
    }
  }
  export default RadGan;