import React, { Component } from 'react';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import './Tree.css';

class TreeChart extends Component {
    render() {
        return (
            <div className="custom-container">
                <Tree
                    data={this.props.data}
                    height={200}
                    width={600}

                    nodeRadius = {8}
                    animated = {true}
                    svgProps={{
                        className: 'custom'
                    }}
                    nodeOffset={-15}
                >
                </Tree>
           
            </div>
        );
    }
}
export default TreeChart;