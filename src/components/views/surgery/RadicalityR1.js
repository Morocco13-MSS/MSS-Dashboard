import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

class RadicalityR1 extends Component {
    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4> Radicalité = "R1" </h4>
                    <div className="square_top_pna">
                        <div className="radicality_value">
                        {
                            ((this.props.radicalityR1/this.props.total)*100).toFixed(0)
                        }{'%'}
                        </div>
                    </div>
                    <div className="square_bottom_pna">
                        <div className="perforation_square_left">
                            <div className="perforation_name"> {'R1'}</div>
                            <div className="radicality_r1_value">{this.props.radicalityR1}</div>
                        </div>
                        <div className="perforation_square_left">
                            <div className="perforation_name"> {'Autres'}</div>
                            <div className="perforation_value">{this.props.others}</div>
                        </div>
                        <div className="perforation_square_left">
                            <div className="perforation_name"> {'Missing'}</div>
                            <div className="perforation_value">{this.props.missing}</div>
                        </div>
                        <div className="perforation_square_right">
                            <div className="perforation_name">{'Total'}</div>
                            <div className="perforation_value">{this.props.total}</div>
                        </div>
                    </div>

                </Panel.Body>
            </Panel>
        );
    }
}
export default RadicalityR1;