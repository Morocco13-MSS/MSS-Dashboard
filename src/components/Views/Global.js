import React, { Component } from 'react';
import axios from 'axios';
import Pie from '../Charts/Pie';
import TreeChart from '../Charts/Tree';
import Filter from '../Filter';
// import '../Charts/Tree.css';

class Global extends Component {
    constructor (props) {
        super(props);
        this.state = {
            global: {},
            someVar: null
        }
        this.params = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: '38'       //doc-ID from 36, unit-ID "1,2,3,4"
        }
        this.getPatientsGlobal();
        this.updateFilter = this.updateFilter.bind(this)
    }
    
    updateFilter(update) {
        if(Object.keys(update)[0] !== null){
            switch(Object.keys(update)[0]) {
                case 'startDate':
                    this.params.startDate = update.startDate;
                    break;
                case 'endDate':
                    this.params.endDate = update.endDate;
                    break;
                case 'userLevel':
                    this.params.userLevel = update.userLevel;
                    break;
                default:        
            }
        }
        this.getPatientsGlobal();
    }

    getPatientsGlobal () {
        console.log(this.params);
        axios.get('http://localhost:8080/global', {
            params: this.params
          })
        .then(response => {
            this.setState((state, props) => ({
                global: {
                    name: 'Patients',
                    children: [
                        {
                            name: 'Curative: ' + response.data.curativeCount,
                            gProps: {
                                className: 'red-node',
                                onClick: node => {
                                    // alert(`Clicked ${node}!`);
                                }       
                            }
                        },
                        {
                            name: 'Other',
                            children: [ 
                                {
                                    name: 'Palli: ' + response.data.palliCount
                                },
                                {
                                    name: 'Missing Data: ' + response.data.missCount
                                },
                                {
                                    name: 'N/A: ' + response.data.nACount
                                }
                                
                            ]
                        }
                    ]   
                }
              }));   
        });
      }
    render() {
        return (
            <div>
                <Filter updateFilter = {this.updateFilter}/>
                <TreeChart data={this.state.global}/>
            </div>
        );
      }
  }

  export default Global;