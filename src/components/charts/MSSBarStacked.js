import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
    {name: 'Patients', bmi_lt_18: 5, bmi_other: 40, bmi_missing: 10, wl_gt_10: 12, wl_other: 23, wl_missing: 5},
];

class MSSBarS extends Component {

   
    render() {
        return (
            <BarChart width={400} height={250} data={data}
                margin={{top: 20, right: 100, left: 0, bottom: 5}}
                barSize={30}
                barGap = {40}
                layout="vertical"
                >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis type="number"/>
                <YAxis type="category" />
                {/* <Tooltip/> */}
                {/* <Legend /> */}
                <Bar dataKey="bmi_lt_18" stackId="a" fill="#8884d8" />
                <Bar dataKey="bmi_other" stackId="a" fill="#9999999f" />
                <Bar dataKey="bmi_missing" stackId="a" fill="#9999996b" />
                <Bar dataKey="wl_gt_10" stackId="b" fill="#82ca9d" />
                <Bar dataKey="wl_other" stackId="b" fill="#9999999f" />
                <Bar dataKey="wl_missing" stackId="b" fill="#9999996b" />
            </BarChart>
        );
    }
  }

export default MSSBarS;