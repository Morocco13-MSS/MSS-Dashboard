import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';

import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis,
    YAxis} from 'react-vis';

class Line extends Component {
    render() {
      return (
        <XYPlot height={300} width= {300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={this.props.data} />
          {/* <VerticalBarSeries data={data} /> */} 
        </XYPlot>
      );
    }
  }

export default Line;
