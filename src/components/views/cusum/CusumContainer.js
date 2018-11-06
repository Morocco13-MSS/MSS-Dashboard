import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSCusumChart  from '../../charts/MSSCusumChart'

class CusumContainer extends Component {
    render() {
        return (
            <div>
                <Panel>
                    <Panel.Body>
                        <h4>CUSUM Chart</h4>
                        <MSSCusumChart
                            dot={this.props.dot}
                              masterLine={this.props.masterLine}
                              up={this.props.up}
                              bottom={this.props.bottom}
                           
                        />
                    </Panel.Body>
                </Panel>
            </div>
        )


    };
}

export default CusumContainer;