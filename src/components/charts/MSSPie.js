/* ***************************************************************** */
/*                                                                   */
/* MSSPie Chart Components                                           */
/*                                                                   */
/*      Input requrested for chart:                                  */
/*          data: [                                                  */
/*              {name: 'group A', value: 20},                        */
/*              {name: 'group B', value: 40},                        */ 
/*              {name: 'group C', value: 10}                         */
/*            ]                                                      */
/*          color: ['#0088FE', '#00C49F', '#FFBB28']                 */
/*          centerText: 'Center Text'                                */
/*          centerText2: 'Center Text 2'                             */
/*                                                                   */
/*      How to use:                                                  */
/*          1. import MSSPie components                              */
/*          2. In your caller component,                             */
/*           make usre you have all the above four variables defined */
/*          3. <MSSPie data={yourDate}                               */
/*                 colors={yourColor}                                */
/*                 centerText={yourCenterText}                       */
/*                 centerText2={yourcenterText2}                     */
/*          />                                                       */
/*                                                                   */
/*      Example: src/components/views/patients/Age.js                */
/*                                                                   */
/* ***************************************************************** */


import React, { Component } from 'react';
import {PieChart, Pie, Sector, Cell, Label} from 'recharts';

function renderActiveShape (props) {
    const RADIAN = Math.PI / 180;
    const {cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, percent, value, name} = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 15) * cos;
    const sy = cy + (outerRadius + 15) * sin;
    const mx = cx + (outerRadius + 20) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/> */}
            {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/> */}
            {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize="14">
                {`${(percent * 100).toFixed(2)}%`}
            </text> */}
            {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize="20">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`${(percent * 100).toFixed(2)}%`}
            </text> */}
        </g>
    );
}

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

class MSSPie extends Component {

    constructor (props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
        this.onPieEnter = this.onPieEnter.bind(this);
    }

    onPieEnter(data, index) {
        this.setState({
            activeIndex: index
        });
    }
    
	render () {
        return (
            <PieChart width={300} height={200}>
                <Pie 
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape} 
                    data={this.props.data} 
                    cx={150} 
                    cy={100} 
                    innerRadius={60}
                    outerRadius={70} 
                    fill="#8884d8"
                    // onMouseEnter={this.onPieEnter}
                    animationBegin={10}
                > 
                    <Label width={30} position="center"
                        content={<CustomizedLabel value1={this.props.centerText} value2={this.props.centerText2} />}>
                    </Label>
                    {
                        this.props.data.map((entry, index) => <Cell fill={this.props.colors[index % this.props.colors.length]}/>)
                    }
                </Pie>
        </PieChart>
        );
    }
}
export default MSSPie;


