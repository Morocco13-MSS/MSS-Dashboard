import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

class LumphNodeExam extends Component {
    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>{'Lumph Node Exam > 12'}</h4>
                    <div className="square_top_pna">
                        <div className="lumphNodeExam_value">
                        {
                            ((this.props.examinCountgt12/this.props.total)*100).toFixed(0)
                        }{'%'}
                        </div>
                    </div>
                    <div className="square_bottom_pna">
                        <div className="lumphNodeExam_square_left">
                            <div className="perforation_name"> {'>12'}</div>
                            <div className="lumphNodeExam_gt12_value">{this.props.examinCountgt12}</div>
                        </div>
                        <div className="lumphNodeExam_square_left">
                            <div className="perforation_name"> {'Others'}</div>
                            <div className="perforation_value">{this.props.others}</div>
                        </div>
                        <div className="lumphNodeExam_square_right">
                            <div className="perforation_name">{'Total'}</div>
                            <div className="perforation_value">{this.props.total}</div>
                        </div>
                    </div>

                </Panel.Body>
            </Panel>
        );
    }
}
export default LumphNodeExam;