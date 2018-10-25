import React, { Component } from 'react';
import {PieChart, Pie, Legend, Label} from 'recharts';


const data01 = [{name: 'Group A', value: 20}, {name: 'Group B', value: 60},
                  {name: 'Group C', value: 10}, {name: 'Group D', value: 10}]

const data02 = [{name: 'A1', value: 80}]


class MSSDoublePie extends Component {
	render () {
        var end = 360/100*80;
  	return (
    	<PieChart width={350} height={250}>
        <Pie data={data01} cx={180} cy={100} innerRadius={60} outerRadius={70} fill="#8884d8" label>
            <Label width={30} position="center">777
                       
            </Label>
        
        </Pie>
        <Pie 
            startAngle={end}
            endAngle={0}
        
        data={data02} cx={180} cy={100} innerRadius={80} outerRadius={90} fill="#82ca9d" label/>
       </PieChart>
    );
  }
}

export default MSSDoublePie;

