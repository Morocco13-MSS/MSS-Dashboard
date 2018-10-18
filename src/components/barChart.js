import React, { Component } from 'react';

import {XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis,
    YAxis} from 'react-vis';

class Bar extends Component {

    render() {
      return (
      <XYPlot height={300} width= {300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={this.props.data} /> 
      </XYPlot>
      );
    }
  }

export default Bar;
