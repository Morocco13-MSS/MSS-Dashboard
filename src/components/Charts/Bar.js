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
          {/* <VerticalBarSeries data={this.props.data} />  */}
          <VerticalBarSeries data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]} />
      </XYPlot>
      );
    }
  }

export default Bar;
