import React, { Component } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, MarkSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries, DiscreteColorLegend} from 'react-vis';

const ITEMS = [
    'Up',
    'Lo',
    'Master Line',
    'Alert Dots',
  ];
  
  const COLORS = [
    '#f98866',
    '#6ba225',
    '#2f4961',
    '#ff420e'
  ];


class MSSCusumChart extends Component{
    render() {
        return(
            <div>
            <XYPlot height={300} width= {700}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Number of Patients"/>
                <YAxis title="Cumulative Sum Mortality Rate"/>
    
                <LineSeries 
                    data={this.props.up} 
                    curve={'curveBasis'} 
                    color="#f98866" 
                    style={{
                        strokeWidth: 1
                    }}
                />

                    <LineSeries 
                    data={this.props.bottom}
                    curve={'curveBasis'} 
                    color="#6ba225" 
                    style={{
                        strokeWidth: 1
                    }}
                />
                
                <LineSeries 
                    data={this.props.masterLine}
                    curve={'curveMonotoneX'} 
                    color="#2f4961" 
                    style={{
                        strokeWidth: 1
                    }}
                />
                
                <MarkSeries 
                    data={this.props.dot}
                    size="2" 
                    style={{stroke: '#ff420e'}}
                    color="#ff420e"
                />
            </XYPlot>
            <DiscreteColorLegend
                colors={COLORS}
                orientation="horizontal"
                width={700}
                items={ITEMS}
            />
            </div>
        );
    }
};

export default MSSCusumChart;
