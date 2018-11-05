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
                <h4 className='chartTitle'>Bilan Manquant Adherent
                { !this.props.hide_dr &&
                    <span className='dr_result'>
                        <div className="square_bilan_dr_left">
                            <div className="preo_dr_name"> {'Adherent'}</div>
                            <div className="bilan_dr_adh"> {((this.props.mdt_adherent_dr/this.props.mdt_total_dr)*100).toFixed(0)}</div>
                        </div>
                        <div className="square_bilan_dr_left">
                            <div className="preo_dr_name">{'Thorax'}</div>
                            <div className="bilan_dr_tho">{((this.props.tmd_thorax_adherent_dr/this.props.tmd_thorax_total_dr)*100).toFixed(0)}</div>
                        </div>
                        <div className="square_bilan_dr_right">
                            <div className="preo_dr_name"> {'Abdomen'}</div>
                            <div className="bilan_dr_abd">{((this.props.tmd_abdomen_adherent_dr/this.props.tmd_abdomen_total_dr)*100).toFixed(0)}</div>
                        </div>
                    </span>
                }
                </h4>
                <div className="square_bottom_bar">
                    <MSSBar
                    data={this.props.data}
                    colors={this.state.colors}
                    key1={this.props.key1} 
                    key2={this.props.key2} 
                    key3={this.props.key3}
                    width={600}
                    height={200}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
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