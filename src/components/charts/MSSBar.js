import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList} from 'recharts';
const data = [
    {name: 'MDT', yes: 4000, no: 2400, missing: 2400},
    {name: 'TDM thorax', yes: 3000, no: 1398, missing: 2210},
    {name: 'TDM abdomen', yes: 2000, no: 6800, missing: 2290}

];

function CustomizedLabel({viewBox, value1, value2}){
    const {cx, cy} = viewBox;
    let percent = (value1/value2 * 100).toFixed(0);

    return (
        <text x={cx} y={cy} fill="#3d405c" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
        <tspan x={cx} y={cy-5} fontSize="36">{percent}</tspan>
        <tspan fontSize="18">%</tspan>
        <tspan x={cx}  dy="40" alignmentBaseline="middle" fontSize="30"  fill="#999">{value1}</tspan>
        <tspan fontSize="20" fill="#999">/{value2}</tspan>

        </text>
    )
}

class MSSBar extends Component {
    render () {
        return (
            <BarChart width={600} height={300} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="yes" fill="#8884d8">
            <LabelList dataKey="yes" position="top"/>
            {/* <LabelList content={<CustomizedLabel external={} />} /> */}

        </Bar>
        <Bar dataKey="no" fill="#999" />
        <Bar dataKey="missing" fill="#666" />
        </BarChart>
        )
    }
}
export default MSSBar;