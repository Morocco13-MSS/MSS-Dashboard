import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import TreeChart from '../../charts/Tree';
import './GlobalDashboard.css'

class PatientTypes extends Component {

    render() {
        return (
            <Panel className ='global_tile global_tree' >
                <h4>{this.props.title}</h4>
                <TreeChart className ='global_tree'  data={this.props.data}/> 
            </Panel>
        );
    }
  }
  export default PatientTypes;