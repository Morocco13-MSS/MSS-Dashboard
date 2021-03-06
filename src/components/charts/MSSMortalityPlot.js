import React, { Component } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, MarkSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries, DiscreteColorLegend} from 'react-vis';

const ITEMS = [
    'Myself',
    'Other Drs',
    'All Units',
    'Benchmark',
    'Up',
    'Up2',
    'Lo2',
    'Lo'
  ];
  
  const COLORS = [
    '#8884d8',
    '#f7aa04',
    '#6fac86',
    '#6ba225',
    '#f52549',
    '#ffccac',
    '#2988bc',
    '#2f4961'
  ];

class MSSMortalityPlot extends Component {

    render() {

        return (
            <div>
            <XYPlot height={300} width= {700}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Number of Patients" />
                <YAxis title="Mortality Rate" />
 
                <MarkSeries 
                    data={this.props.scatter} 
                    size="6" 
                    color="#f7aa04"
                    opacity="0.8"
                />
                <MarkSeries 
                    data={this.props.dot} 
                    size="7" 
                    color="#8884d8"
                />

                <MarkSeries 
                    data={this.props.allUnits} 
                    size="10" 
                    color="#6fac86"
                />

                <LineSeries
                    data={this.props.benchmark} 
                    curve={'curveMonotoneX'}
                    color="#6ba225"
                    style={{
                        strokeWidth: 2
                    }}
                />
                <LineSeries 
                    data={this.props.up} 
                    curve={'curveMonotoneX'} 
                    color="#f52549"
                    style={{
                        strokeWidth: 1
                    }}
                />
                <LineSeries 
                    data={this.props.up2}  
                    curve={'curveBasis'} 
                    color="#ffccac" 
                    style={{
                        strokeWidth: 2
                    }}
                    strokeDasharray="3 4"
                />
                <LineSeries 
                    data={this.props.lo2}
                    color="#2988bc" 
                    curve={'curveMonotoneX'}
                    strokeDasharray="3 4"
                />
                <LineSeries
                    data={this.props.lo}
                    curve={'curveMonotoneX'} 
                    color="#2f4961" 
                    style={{
                        strokeWidth: 1
                    }}
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
  }
export default MSSMortalityPlot;
