import React, { Component } from 'react';
import {PieChart, Pie, Label} from 'recharts';

function CustomizedLabel({viewBox, value1, value2}){
    const {cx, cy} = viewBox;
    let percent = (value1/value2 * 100).toFixed(0);

    return (
        <text x={cx} y={cy} fill="#3d405c" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="36">{percent}</tspan>
            <tspan fontSize="18">%</tspan>
        </text>
    )
}

class MSSDoublePie extends Component {
	render () {
        var end = 360/this.props.total*(this.props.lt18+this.props.gt30);
        return (
            <PieChart width={350} height={250}>
            <Pie 
                data={this.props.data1} 
                cx={180} cy={120} 
                innerRadius={60} 
                outerRadius={70} 
                fill="#82ca9d">
                    <Label width={30} position="center"
                        content={<CustomizedLabel 
                            value1={this.props.centerText} 
                            value2={this.props.centerText2} />}>
                    </Label>
            </Pie>
            <Pie 
                startAngle={end}
                endAngle={0}
                data={this.props.data2} 
                cx={180} 
                cy={120} 
                innerRadius={80} 
                outerRadius={90} 
                fill="#8884d8" label/>
        </PieChart>
        );
    }
}

export default MSSDoublePie;

