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
          <LineSeries
          data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}, {x: 5, y: 4}, {x: 6, y: 9}]} />
        </XYPlot>
      );
    }
  }

export default Line;
