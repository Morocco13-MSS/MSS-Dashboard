import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSSimplePie from '../../charts/MSSSimplePie';
import './SurgeryDashboard.css'

class ResecAsso extends Component {
    constructor () {
        super();
        this.state = {
            colors: ['#0088FE', '#FFBB28', '#f52549', '#00C49F', '#999']
        }
    }
    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4 className='surgeryChartTitle'>{' Résection associée'}
                        { !this.props.hide_dr && this.props.dr &&
                            <span className='dr_result'>
                                <div className="squareLeftPreo_dr">
                                    <div className="surgery_dr_name"> {'LR'}</div>
                                    <div className="sur_lr_value_dr">{this.props.dr.localResec}</div>
                                </div>
                                <div className="squareLeftPreo_dr">
                                    <div className="surgery_dr_name">{'RR'}</div>
                                    <div className="sur_rr_value_dr">{this.props.dr.RemoteResec}</div>
                                </div>
                                <div className="squareLeftPreo_dr">
                                    <div className="surgery_dr_name"> {'LRR'}</div>
                                    <div className="sur_lrr_value_dr">{this.props.dr.localRemoteCnt}</div>
                                </div>
                                <div className="squareLeftPreo_dr">
                                    <div className="surgery_dr_name"> {'NoR'}</div>
                                    <div className="sur_nr_value_dr">{this.props.dr.noResecCount}</div>
                                </div>
                                <div className="squareRightPreo_dr">
                                    <div className="surgery_dr_name">{'Total'}</div>
                                    <div className="surgery_dr_value">{this.props.dr.total}</div>
                                </div>
                            </span>
                        }
                    </h4>
                    <div className = "surgery_chart">
                        <MSSSimplePie 
                            data={this.props.data} 
                            colors={this.state.colors} 
                            width={400}
                            height={200}
                            cx={220}
                        />
                    </div>
                    
                    <div className="square_surgery_ra_left">
                        <div className="preo_name"> {'LR'}</div>
                        <div className="sur_lr_value">{this.props.localResec}</div>
                    </div>
                    <div className="square_surgery_ra_left">
                        <div className="preo_name">{'RR'}</div>
                        <div className="sur_rr_value">{this.props.RemoteResec}</div>
                    </div>
                    <div className="square_surgery_ra_left">
                        <div className="preo_name"> {'LRR'}</div>
                        <div className="sur_lrr_value">{this.props.localRemoteCnt}</div>
                    </div>
                    <div className="square_surgery_ra_left">
                        <div className="preo_name"> {'NoR'}</div>
                        <div className="sur_nr_value">{this.props.noResecCount}</div>
                    </div>
                    <div className="square_surgery_ra_left">
                        <div className="preo_name">{'Missing'}</div>
                        <div className="sur_value">{this.props.missing}</div>
                    </div>
                    <div className="square_surgery_ra_left">
                        <div className="preo_name"> {'N/A'}</div>
                        <div className="sur_value">{this.props.na}</div>
                    </div>
                    <div className="square_surgery_ra_right">
                        <div className="preo_name">Total</div>
                        <div className="sur_value">{this.props.total}</div>
                    </div>
                </Panel.Body>
            </Panel>
           
        );
    }    
}
export default ResecAsso;