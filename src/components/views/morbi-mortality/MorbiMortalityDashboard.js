import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Filter from '../../Filter';
import MortalityPlot from './MortalityPlot'

class MorbiMortality extends Component {
    constructor (props) {
        super(props);
        // Filter function will be triggered when date or type is changed
        this.updateFilter = this.updateFilter.bind(this);
        this.updateFilter();
    }

    async updateFilter(update) {
        // if(update && Object.keys(update)[0] !== null){
        //     switch(Object.keys(update)[0]) {
        //         case 'startDate':
        //             this.params.startDate = update.startDate;
        //             this.params_unit.startDate = update.startDate;
        //             this.params_all.startDate = update.startDate;
        //             break;
        //         case 'endDate':
        //             this.params.endDate = update.endDate;
        //             this.params_unit.endDate = update.endDate;
        //             this.params_all.startDate = update.startDate;
        //             break;
        //         case 'userLevel':
        //             if(update.userLevel === 0){
        //                 this.setState({
        //                     unitIsHidden: true,
        //                     allIsHidden: true
        //                 })
        //             } else {
        //                 if(update.userLevel === 1){
        //                     this.setState({
        //                         unitIsHidden: !this.state.unitIsHidden
        //                     })
        //                 }else{
        //                     this.setState({
        //                         allIsHidden: !this.state.allIsHidden
        //                     })
        //                 }
        //             }
        //             break;
        //         default:        
        //     }
        // }
        // this.setState({
        //     global: await this.globalApi.getPatientsGlobal(this.params),
        //     global_unit: await this.globalApi.getPatientsGlobal(this.params_unit),
        //     global_all: await this.globalApi.getPatientsGlobal(this.params_all),
        //     gest: await this.globalApi.getPatientsGestType(this.params, this.params_unit, this.params_all)
        // });
    }
    render() {
        return (
            <div>
                <Filter updateFilter = {this.updateFilter}/>
                <Grid className ='patient_grid'>
                    <Row>
                        <Col xs={8} md={8}>
                            <MortalityPlot/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }    
}
export default MorbiMortality;