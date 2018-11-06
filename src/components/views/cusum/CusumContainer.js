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
                            dot={this.props.alerts}
                            masterLine={this.props.cusumLine}
                            up={this.props.ucl}
                            bottom={this.props.lcl}
                        />
                    </Panel.Body>
                </Panel>
            </div>
        )
    };
}

export default CusumContainer;