import React, { Component } from 'react';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import './Tree.css';

class TreeChart extends Component {
    render() {
        // let data = {
        //     name: 'Parent',
        //     children: [{
        //         name: 'Child One'
        //     }, {
        //         name: 'Child Two'
        //     },
        //     {
        //         name: 'Child Three',
        //         gProps: {
        //             className: 'red-node',
        //             onClick: node =>
        //                 alert(`Clicked ${node}!`)
        //         }
        //     }]
        // };
        return (
            <div className="custom-container">
                <Tree
                    data={this.props.data}
                    height={400}
                    width={600}
                    nodeRadius = {8}
                    animated = {true}
                    svgProps={{
                        className: 'custom'
                    }}
                    nodeOffset={-15}
                >
                    <text 
                        dy="15" 
                        dx="5" 
                        fill="#000000"
                    >
		                Global view
	                </text>
                </Tree>
           
            </div>
        );
    }
}
export default TreeChart;