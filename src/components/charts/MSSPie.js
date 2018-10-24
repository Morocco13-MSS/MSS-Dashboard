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
import {PieChart, Pie, Sector, Cell} from 'recharts';

var CENTER_TEXT = 'CENTER_TEXT', 
    CENTER_TEXT_2 ='CENTER_TEXT_2';

function renderActiveShape (props) {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, percent, value, name} = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 5) * cos;
    const sy = cy + (outerRadius + 5) * sin;
    const mx = cx + (outerRadius + 15) * cos;
    const my = cy + (outerRadius + 15) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 11;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} textAnchor="middle" fill="#333">
                <tspan x={cx} y={cy} dy={10} font-size="40">
                    {CENTER_TEXT}
                </tspan>
                <tspan x={cx} y={cy} dy={35} font-size="16" fill="#999">
                    {CENTER_TEXT_2}
                </tspan>       
            </text>
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
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
                {`${name}: ${value}`}
            </text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        </g>
    );
}

class MSSPie extends Component {

    constructor (props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
        this.onPieEnter = this.onPieEnter.bind(this);
        
        // used in renderActiveShape function
        CENTER_TEXT = this.props.centerText; 
        CENTER_TEXT_2 = this.props.centerText2;
    }

    onPieEnter(data, index) {
        this.setState({
            activeIndex: index
        });
    }
    
	render () {
        return (
            <PieChart width={350} height={300}>
                <Pie 
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape} 
                    data={this.props.data} 
                    cx={160} 
                    cy={100} 
                    innerRadius={60}
                    outerRadius={70} 
                    fill="#8884d8"
                    onMouseEnter={this.onPieEnter}
                    animationBegin={10}
                >
                    {this.props.data.map((entry, index) => <Cell fill={this.props.colors[index % this.props.colors.length]}/>)}
                </Pie>
        </PieChart>
        );
  }
}
export default MSSPie;


