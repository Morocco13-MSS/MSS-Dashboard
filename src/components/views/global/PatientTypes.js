import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import TreeChart from '../../charts/Tree';
import './GlobalDashboard.css'

class PatientTypes extends Component {

    render() {
        return (
            <Panel className ='global_tile global_tree' >
                <TreeChart className ='global_tree'  data={this.props.data}/> 
            </Panel>
        );
      }
  }
  export default PatientTypes;