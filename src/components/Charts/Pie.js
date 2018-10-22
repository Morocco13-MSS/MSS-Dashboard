import React, { Component } from 'react';
import {RadialChart, Hint} from 'react-vis';
// import '../../../node_modules/react-vis/dist/styles'
// import 'node_modules/react-vis/dist/style.css';

class Pie extends Component {
    state = {
        value: false
    };

    render() {
        const {value} = this.state;
        return (
            <div>
                <h5>{this.props.name}</h5>
                <RadialChart
                    innerRadius={80}
                    radius={110}
                    getLabel={d => d.name}
                    data={this.props.data}
                    labelsRadiusMultiplier={0.8}
                    labelsStyle={{fontSize: 18, fill: '#fff'}}
                    // showLabels
                    style={{stroke: '#fff', strokeWidth: 2}}
                    width={250}
                    height={250}
                    onValueMouseOver={v => this.setState({value: v})}
                    onSeriesMouseOut={v => this.setState({value: false})}
                >
                {value && <Hint value={value} />}
                </RadialChart>
            </div>
        );
    }
  }
export default Pie;
