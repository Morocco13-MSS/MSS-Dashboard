import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import './PatientsDashboard.css'

class BMIWL extends Component {
    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>Patients Weight Loss > 10% or BMI ≤ 18 </h4>
                    <div className="square_top_bmiwl">
                        <div className="bmiw_value">
                        {
                            ((this.props.max/this.props.total)*100).toFixed(0)
                        }{'%'}
                        </div>
                        <div className="bmiw_value_2">
                            {this.props.max}{'/'}{this.props.total}
                        </div>
                    </div>
                    <div className="square_left_bottom_bmiwl">
                        <div className="bmiw_title_2">{'Patients BMI < 18'} </div>
                        <div className="bmiw_value_3">
                        {
                            ((this.props.lt18/this.props.total)*100).toFixed(0)
                        }{'%'}
                        </div>
                        <div className="bmiw_value_5">
                            {this.props.lt18}{'/'}{this.props.total}
                        </div>
                    </div>
                    <div className="square_right_bottom_bmiwl">
                        <div className="bmiw_title_2">{'Patients Weight Loss > 10%'} </div>
                        <div className="bmiw_value_4">
                        {
                            ((this.props.gt10/this.props.total)*100).toFixed(0)
                        }{'%'}
                        </div>
                        <div className="bmiw_value_5">
                            {this.props.gt10}{'/'}{this.props.total}
                        </div>

                    </div>
                </Panel.Body>
            </Panel>
        );
    }
}
export default BMIWL;