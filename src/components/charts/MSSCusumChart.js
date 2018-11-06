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
    '#ff2f2f',
    '#4286f4',
    '#999',
    'red'
  ];


class MSSCusumChart extends Component{
    render() {
        return(
            <div>
            <XYPlot height={300} width= {700}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
    
                <LineSeries 
                    data={this.props.up} 
                    curve={'curveBasis'} 
                    color="#ff2f2f" 
                    style={{
                        strokeWidth: 2
                    }}
                />

                    <LineSeries 
                    data={this.props.bottom}
                    curve={'curveBasis'} 
                    color="#4286f4" 
                    style={{
                        strokeWidth: 2
                    }}
                />
                
                <LineSeries 
                    data={this.props.masterLine}
                    curve={'curveBasis'} 
                    color="#999" 
                    style={{
                        strokeWidth: 2
                    }}
                    strokeDasharray="3 4"
                />
                
                <MarkSeries 
                    data={this.props.dot}
                    size="3" 
                    style={{stroke: 'red'}}
                    className="test1"
                    color="#fff"
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
