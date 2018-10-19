import React, { Component } from 'react';
import Patients from '../api/patients';
import PlotChart from './funnelPlotTest'

class Charts extends Component {
    // TODO
    render() {
        return (
            <div>
                <Patients/>
                <PlotChart/>
            </div>
        )};
    }
export default Charts;