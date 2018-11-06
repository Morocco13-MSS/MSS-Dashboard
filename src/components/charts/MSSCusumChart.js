import React, { Component } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, MarkSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries, DiscreteColorLegend} from 'react-vis';

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
                    color="#000" 
                    style={{
                        strokeWidth: 2
                    }}
                    strokeDasharray="3 4"
                />
                
                <MarkSeries 
                data={this.props.dot}
                size="3" 
                markStyle={{stroke: 'red'}}
                className="test1"
                color="#fff"
                />
            </XYPlot>
            </div>
        );
    }
};

export default MSSCusumChart;
