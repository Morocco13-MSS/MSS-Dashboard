import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSMortalityPlot from '../../charts/MSSMortalityPlot'

class MortalityPlot extends Component {
    render() {

        return (
            <div>
                <Panel>
                    <Panel.Body>
                        <h4>Mortality Rate Funnel Plot</h4>
                        <MSSMortalityPlot
                            dot={this.props.dot}
                            scatter={this.props.scatter}
                            benchmark={this.props.benchmark}
                            up={this.props.up}
                            up2={this.props.up2}
                            lo={this.props.lo}
                            lo2={this.props.lo2}
                        />
                    </Panel.Body>
                </Panel>
            </div>
        )
    }    
}
export default MortalityPlot;