import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {RadialChart} from 'react-vis';

class Pie extends Component {
    render() {
        return (
            <RadialChart
            innerRadius={60}
            radius={140}
            getLabel={d => d.name}
            data={this.props.data}
            labelsRadiusMultiplier={0.8}
            labelsStyle={{fontSize: 18, fill: '#fff'}}
            showLabels
            style={{stroke: '#fff', strokeWidth: 2}}
            width={300}
            height={300}
            />
        );
    }
  }
export default Pie;
