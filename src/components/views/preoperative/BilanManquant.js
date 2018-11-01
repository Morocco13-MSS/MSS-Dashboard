import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSBar from '../../charts/MSSBar';
import './PreoperativeDashboard.css'

class BilanManquant extends Component {
    constructor () {
        super();
        this.state = {
            colors: ["#1f77b4", "#ff7f0e", "#2ca02c"]
        }
    }
    render() {
        return (
            <Panel>
            <Panel.Body>
                <h4>Bilan Manquant Adherent</h4>
                <div className="square_bottom_bar">
                    <MSSBar
                    data={this.props.data}
                    colors={this.state.colors}
                    key1={this.props.key1} 
                    key2={this.props.key2} 
                    key3={this.props.key3}
                    mdt_adherent={this.props.mdt_adherent}
                    mdt_total={this.props.mdt_total}
                    tmd_thorax_adherent={this.props.tmd_thorax_adherent}
                    tmd_thorax_total={this.props.tmd_thorax_total}
                    tmd_abdomen_adherent={this.props.tmd_abdomen_adherent}
                    tmd_abdomen_total={this.props.tmd_abdomen_total}
                    />

                    <div className="squareLeftPreo">
                        <div className="namePreo"> {'MDT Adherent (%)'}</div>
                        <div className="mdt_value">
                            {((this.props.mdt_adherent/this.props.mdt_total)*100).toFixed(0)}
                        </div>
                    </div>
                    <div className="squareLeftPreo">
                        <div className="namePreo"> {'TMD Thorax (%)'}</div>
                        <div className="tmd_thorax_value">
                            {((this.props.tmd_thorax_adherent/this.props.tmd_thorax_total)*100).toFixed(0)}
                        </div>
                    </div>
                    <div className="squareRightPreo">
                        <div className="namePreo"> {'TMD Abdomen (%)'}</div>
                        <div className="tmd_abdomen_value">
                            {((this.props.tmd_abdomen_adherent/this.props.tmd_abdomen_total)*100).toFixed(0)}
                        </div>
                    </div>
                </div>
                </Panel.Body>
            </Panel>
        );
    }
  }
  export default BilanManquant;