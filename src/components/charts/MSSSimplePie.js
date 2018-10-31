import React, { Component } from 'react';
import {PieChart, Pie, Cell} from 'recharts';


class MSSSimplePie extends Component {
	render () {
  	return (
    	<PieChart width={this.props.width} height={this.props.height} >
        <Pie
                data={this.props.data} 
                cx={this.props.cx}
                outerRadius={80} 
                fill="#8884d8"
                animationBegin={10}
                >
                {
                    this.props.data.map((entry, index) => <Cell fill={this.props.colors[index % this.props.colors.length]}/>)
                }
                </Pie>
       </PieChart>
    );
  }
}

export default MSSSimplePie;
