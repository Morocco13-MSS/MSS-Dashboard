import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSSimplePie from '../../charts/MSSSimplePie';
import './PreoperativeDashboard.css'

class PreoDaysBeforeSurgery extends Component {
    constructor () {
        super();
        this.state = {
            colors: ['#0088FE', '#00C49F', '#FFBB28', '#999'],
        }
    }
    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>{'Des Semaines Avant La Chirurgie'}
                        { !this.props.hide_dr && this.props.dr &&
                            <span className='dr_result'>
                                <div className="squareLeftPreo_dr">
                                    <div className="preo_dr_name"> {'<6'}</div>
                                    <div className="preo_dr_lt6">{this.props.dr.lt6weeks}</div>
                                </div>
                                <div className="squareLeftPreo_dr">
                                    <div className="preo_dr_name">{'6~8'}</div>
                                    <div className="preo_dr_6to8">{this.props.dr.six2etweeks}</div>
                                </div>
                                <div className="squareLeftPreo_dr">
                                    <div className="preo_dr_name"> {'>8'}</div>
                                    <div className="preo_dr_gt8">{this.props.dr.gt8weeks}</div>
                                </div>
                                <div className="squareLeftPreo_missing_dr">
                                    <div className="preo_dr_name">{'Missing'}</div>
                                    <div className="preo_dr_value">{this.props.dr.missing}</div>
                                </div>
                                <div className="squareRightPreo_dr">
                                    <div className="preo_dr_name">{'Total'}</div>
                                    <div className="preo_dr_value">{this.props.dr.total}</div>
                                </div>
                            </span>
                        }
                    </h4>
                    <MSSSimplePie 
                        data={this.props.data} 
                        colors={this.state.colors}
                        width={400}
                        height={200}
                        cx={250}
                    />
                    <div className="square_bottom_days">
                        <div className="squareLeft_2">
                            <div className="preo_name"> {'<6'}</div>
                            <div className="preo_lt6_value">{this.props.lt6weeks}</div>
                        </div>
                        <div className="squareLeft_2">
                            <div className="preo_name">{'6~8'}</div>
                            <div className="preo_6to8_value">{this.props.six2etweeks}</div>
                        </div>
                        <div className="squareLeft_2">
                            <div className="preo_name"> {'>8'}</div>
                            <div className="preo_gt8_value">{this.props.gt8weeks}</div>
                        </div>
                        <div className="squareLeft_2">
                            <div className="preo_name">{'Missing'}</div>
                            <div className="preo_value">{this.props.missing}</div>
                        </div>
                        <div className="squareRight_2">
                            <div className="preo_name">Total</div>
                            <div className="preo_value">{this.props.total}</div>
                        </div>
                    </div>
                </Panel.Body>
            </Panel>
           
        );
    }    
}
export default PreoDaysBeforeSurgery;