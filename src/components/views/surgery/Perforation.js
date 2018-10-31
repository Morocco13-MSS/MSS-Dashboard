import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

class Perforation extends Component {
    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>Peforation (Yes)</h4>
                    <div className="square_top_pna">
                        <div className="pna_value">
                        {
                            ((this.props.yesCount/this.props.total)*100).toFixed(0)
                        }{'%'}
                        </div>
                    </div>
                    <div className="square_bottom_pna">
                        <div className="perforation_square_left">
                            <div className="perforation_name"> {'Yes'}</div>
                            <div className="perforation_yes_value">{this.props.yesCount}</div>
                        </div>
                        <div className="perforation_square_left">
                            <div className="perforation_name"> {'No'}</div>
                            <div className="perforation_value">{this.props.noCount}</div>
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
export default Perforation;