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
                    height={100}
                    width={350}

                    nodeRadius = {6}
                    animated = {true}
                    svgProps={{
                        className: 'custom'
                    }}
                    nodeOffset={-8}
                >
                </Tree>
            </div>
        );
    }
}
export default TreeChart;