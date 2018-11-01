import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSSimplePie from '../../charts/MSSSimplePie';
import './SurgeryDashboard.css'

class FirstLook extends Component {
    constructor () {
        super();
        this.state = {
            colors: ['#0088FE', '#00C49F', '#FFBB28', '#999']
        }
    }
    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>{'Voie d\'abord'}
                        { !this.props.hide_dr && this.props.dr &&
                            <span className='dr_result'>
                                <div className="squareLeftPreo_dr">
                                    <div className="surgery_dr_name"> {'LT'}</div>
                                    <div className="surgery_dr_lt">{this.props.dr.laparotomie}</div>
                                </div>
                                <div className="squareLeftPreo_dr">
                                    <div className="surgery_dr_name">{'LS'}</div>
                                    <div className="surgery_dr_ls">{this.props.dr.laparoscopie}</div>
                                </div>
                                <div className="squareLeftPreo_dr">
                                    <div className="surgery_dr_name"> {'LST'}</div>
                                    <div className="surgery_dr_ltls">{this.props.dr.laparo_scopie_tomie}</div>
                                </div>
                                <div className="squareRightPreo_dr">
                                    <div className="surgery_dr_name">{'Total'}</div>
                                    <div className="surgery_dr_value">{this.props.dr.total}</div>
                                </div>
                            </span>
                        }
                    </h4>
                    <MSSSimplePie 
                        data={this.props.data} 
                        colors={this.state.colors} 
                        width={300}
                        height={200}
                        cx={160}
                    />
                    
                    <div className="square_surgery_left">
                        <div className="preo_name"> {'LT'}</div>
                        <div className="preo_lt6_value">{this.props.laparotomie}</div>
                    </div>
                    <div className="square_surgery_left">
                        <div className="preo_name">{'LS'}</div>
                        <div className="preo_6to8_value">{this.props.laparoscopie}</div>
                    </div>
                    <div className="square_surgery_left">
                        <div className="preo_name"> {'LST'}</div>
                        <div className="preo_gt8_value">{this.props.laparo_scopie_tomie}</div>
                    </div>
                    <div className="square_surgery_right">
                        <div className="preo_name">Total</div>
                        <div className="preo_value">{this.props.total}</div>
                    </div>
                </Panel.Body>
            </Panel>
           
        );
    }    
}
export default FirstLook;