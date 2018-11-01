import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSSimplePie from '../../charts/MSSSimplePie';
import './TraitementAdjuvantDashboard.css';

class TimeBTSurgeryAndAdjuv extends Component {

    constructor () {
        super();
        this.state = {
            colors: ['#00C49F', '#FFBB28', '#999']
        }
    }

    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>Time between Surgery and Adjuv</h4>
                    <MSSSimplePie 
                        data={this.props.data} 
                        colors={this.state.colors} 
                        width={300}
                        height={200}
                        cx={160}
                    />
                    <div className="square_bottom_pna">
                        <div className="chemoRTC_square_left_a">
                            <div className="perforation_name"> {'<6 weeks'}</div>
                            <div className="lt6_value">{this.props.lessth6weeks}</div>
                        </div>
                        <div className="chemoRTC_square_left_a">
                            <div className="perforation_name"> {'>6 weeks'}</div>
                            <div className="gt6_value">{this.props.morethan6weeks}</div>
                        </div>
                        <div className="chemoRTC_square_left">
                            <div className="perforation_name"> {'Missing'}</div>
                            <div className="perforation_value">{this.props.missing}</div>
                        </div>
                        <div className="chemoRTC_square_right_a">
                            <div className="perforation_name">{'Total'}</div>
                            <div className="perforation_value">{this.props.total}</div>
                        </div>
                    </div>

                </Panel.Body>
            </Panel>
        );
    }
}
export default TimeBTSurgeryAndAdjuv;