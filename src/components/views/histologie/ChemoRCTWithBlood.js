import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import './TraitementAdjuvantDashboard.css';

class ChemoRCTWithBlood extends Component {
    render() {

        return (
            <Panel>
                <Panel.Body>
                    <h4>Chemo or RCT with Blood
                    { !this.props.hide_dr && 
                        <span className='dr_result'>
                        Moi:
                        {
                            ((this.props.dr.chemoOrRct/this.props.dr.total)*100).toFixed(0)
                        }{'%'}
                        </span>
                    }
                        
                    </h4>
                    <div className="chemoRTC_top">
                        <div className="chemoRTCBlood_value_p">
                        {
                            ((this.props.data.chemoOrRct/this.props.data.total)*100).toFixed(0)
                        }{'%'}
                        </div>
                    </div>
                    <div className="square_bottom_pna">
                        <div className="chemoRTC_square_left_a">
                            <div className="perforation_name"> {'Chemo/RCT'}</div>
                            <div className="chemoRTCBlood_value">{this.props.data.chemoOrRct}</div>
                        </div>
                        <div className="chemoRTC_square_left">
                            <div className="perforation_name"> {'Others'}</div>
                            <div className="perforation_value">{this.props.data.others}</div>
                        </div>
                        <div className="chemoRTC_square_left">
                            <div className="perforation_name"> {'Missing'}</div>
                            <div className="perforation_value">{this.props.data.missing}</div>
                        </div>
                        <div className="chemoRTC_square_right_a">
                            <div className="perforation_name">{'Total'}</div>
                            <div className="perforation_value">{this.props.data.total}</div>
                        </div>
                    </div>

                </Panel.Body>
            </Panel>
        );
    }
}
export default ChemoRCTWithBlood;