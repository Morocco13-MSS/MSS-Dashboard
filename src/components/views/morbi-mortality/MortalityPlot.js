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
                        <MSSMortalityPlot/>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }    
}
export default MortalityPlot;