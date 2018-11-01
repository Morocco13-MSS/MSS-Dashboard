import React, { Component } from 'react';
import {Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis} from 'recharts';

class MSSRadar extends Component {
    render () {
        return (
            <RadarChart cx={350} cy={230} outerRadius={180} width={700} height={500} data={this.props.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={36} domain={[0, 100]}/>
            <Radar name="Myself" dataKey="dr" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2}/>
            {!this.props.hide_unit &&
                <Radar name="Unit" dataKey="unit" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.2}/>
            }
            {!this.props.hide_all &&
                <Radar name="All Units" dataKey="all" stroke="#ff7f0e" fill="#ff7f0e" fillOpacity={0.2}/>
            }
            <Legend />
            </RadarChart>
        );
    }
}

export default MSSRadar;