import React, { Component } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, MarkSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries, DiscreteColorLegend} from 'react-vis';

const scatter = [{"x":1,"y":0},{"x":12,"y":0},{"x":2,"y":0},{"x":4,"y":0},{"x":2,"y":0.5}];
const benchmark = [{"x":1,"y":0.0476},{"x":2,"y":0.0476},{"x":3,"y":0.0476},{"x":4,"y":0.0476},{"x":5,"y":0.0476},{"x":6,"y":0.0476},{"x":7,"y":0.0476},{"x":8,"y":0.0476},{"x":9,"y":0.0476},{"x":10,"y":0.0476},{"x":11,"y":0.0476},{"x":12,"y":0.0476},{"x":13,"y":0.0476},{"x":14,"y":0.0476},{"x":15,"y":0.0476},{"x":16,"y":0.0476},{"x":17,"y":0.0476},{"x":18,"y":0.0476},{"x":19,"y":0.0476},{"x":20,"y":0.0476},{"x":21,"y":0.0476}];
const up = [{"x":1,"y":0.465},{"x":2,"y":0.3428},{"x":3,"y":0.2886},{"x":4,"y":0.2563},{"x":5,"y":0.2343},{"x":6,"y":0.218},{"x":7,"y":0.2054},{"x":8,"y":0.1952},{"x":9,"y":0.1867},{"x":10,"y":0.1796},{"x":11,"y":0.1735},{"x":12,"y":0.1681},{"x":13,"y":0.1634},{"x":14,"y":0.1592},{"x":15,"y":0.1554},{"x":16,"y":0.152},{"x":17,"y":0.1489},{"x":18,"y":0.146},{"x":19,"y":0.1434},{"x":20,"y":0.141},{"x":21,"y":0.1387}];
const up2 = [{"x":1,"y":0.3205},{"x":2,"y":0.2406},{"x":3,"y":0.2052},{"x":4,"y":0.1841},{"x":5,"y":0.1697},{"x":6,"y":0.159},{"x":7,"y":0.1508},{"x":8,"y":0.1441},{"x":9,"y":0.1386},{"x":10,"y":0.1339},{"x":11,"y":0.1299},{"x":12,"y":0.1264},{"x":13,"y":0.1233},{"x":14,"y":0.1206},{"x":15,"y":0.1181},{"x":16,"y":0.1158},{"x":17,"y":0.1138},{"x":18,"y":0.1119},{"x":19,"y":0.1102},{"x":20,"y":0.1086},{"x":21,"y":0.1072}];
const lo = [{"x":1,"y":-0.3698},{"x":2,"y":-0.2475},{"x":3,"y":-0.1934},{"x":4,"y":-0.1611},{"x":5,"y":-0.139},{"x":6,"y":-0.1228},{"x":7,"y":-0.1101},{"x":8,"y":-0.1},{"x":9,"y":-0.0915},{"x":10,"y":-0.0844},{"x":11,"y":-0.0782},{"x":12,"y":-0.0729},{"x":13,"y":-0.0681},{"x":14,"y":-0.0639},{"x":15,"y":-0.0602},{"x":16,"y":-0.0567},{"x":17,"y":-0.0536},{"x":18,"y":-0.0508},{"x":19,"y":-0.0481},{"x":20,"y":-0.0457},{"x":21,"y":-0.0435}];
const lo2 = [{"x":1,"y":-0.2253},{"x":2,"y":-0.1454},{"x":3,"y":-0.11},{"x":4,"y":-0.0888},{"x":5,"y":-0.0744},{"x":6,"y":-0.0638},{"x":7,"y":-0.0555},{"x":8,"y":-0.0489},{"x":9,"y":-0.0434},{"x":10,"y":-0.0387},{"x":11,"y":-0.0347},{"x":12,"y":-0.0312},{"x":13,"y":-0.0281},{"x":14,"y":-0.0253},{"x":15,"y":-0.0228},{"x":16,"y":-0.0206},{"x":17,"y":-0.0186},{"x":18,"y":-0.0167},{"x":19,"y":-0.015},{"x":20,"y":-0.0134},{"x":21,"y":-0.0119}];

const ITEMS = [
    'Scatter',
    'Benchmark',
    'Up',
    'Up2',
    'Lo2',
    'Lo'
  ];
  
  const COLORS = [
    '#f7aa04',
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
                <XAxis />
                <YAxis />
                <MarkSeries 
                    data={scatter} 
                    size="6" 
                    color="#f7aa04"
                    opacity="0.8"
                />
                <LineSeries
                    data={benchmark} 
                    curve={'curveMonotoneX'}
                    color="#6ba225"
                    style={{
                        strokeWidth: 2
                    }}
                />
                <LineSeries 
                    data={up} 
                    curve={'curveMonotoneX'} 
                    color="#f52549"
                    style={{
                        strokeWidth: 1
                    }}
                />
                <LineSeries 
                    data={up2}  
                    curve={'curveBasis'} 
                    color="#ffccac" 
                    style={{
                        strokeWidth: 2
                    }}
                    strokeDasharray="3 4"
                />
                <LineSeries 
                    data={lo2}
                    color="#2988bc" 
                    curve={'curveMonotoneX'}
                    strokeDasharray="3 4"
                />
                <LineSeries
                    data={lo}
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
                width={300}
                items={ITEMS}
            />
            </div>

        );
    }
  }




export default MSSMortalityPlot;
