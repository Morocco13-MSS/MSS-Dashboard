import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

class PreoNeoAdjuvant extends Component {
    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>Patients have Neo Adjuvant </h4>
                    <div className="square_top_pna">
                        <div className="pna_value">
                        {
                            ((this.props.pna.neoAdjuvant/this.props.pna.total)*100).toFixed(0)
                        }{'%'}
                        </div>
                    </div>
                    <div className="square_bottom_pna">
                        <div className="squareLeftPreo_na">
                            <div className="preo_name"> {'Neo Adjuvant'}</div>
                            <div className="preo_lt6_value">{this.props.pna.neoAdjuvant}</div>
                        </div>
                        <div className="squareRightPreo_na">
                            <div className="preo_name">{'Total'}</div>
                            <div className="preo_value">{this.props.pna.total}</div>
                        </div>
                    </div>

                </Panel.Body>
            </Panel>
        );
    }
}
export default PreoNeoAdjuvant;