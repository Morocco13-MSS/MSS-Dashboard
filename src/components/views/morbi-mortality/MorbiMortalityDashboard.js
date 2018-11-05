import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Filter from '../../Filter';
import MortalityPlot from './MortalityPlot'
import MortalityPlotApi from '../../../apis/mortalityPlotApi';
import './MorbiMortalityDashboard.css';
import loading from '../../imgs/loading1.gif'
import Config from '../../../config/config'

class MorbiMortality extends Component {
    constructor (props) {
        super(props);

        this.state = {
            loading: true,
        }
    
        // API instances 
        this.mortalityPlotApi = new MortalityPlotApi();

        this.params = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 1,       //0-doc, 1-unit, 2-all
            userId: Config.userId        //doc-ID from 36, unit-ID "1,2,3,4"
        }

        this.paramsAll = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 2,       //0-doc, 1-unit, 2-all
            userId: Config.userId        //doc-ID from 36, unit-ID "1,2,3,4"
        }

        // Filter function will be triggered when date or type is changed
        this.updateFilter = this.updateFilter.bind(this);
        this.updateFilter();
    }

    async componentDidMount() {
        const self = this;
        const data = await self.mortalityPlotApi.getMortalityPlotForDrOnly(self.params);
        self.setState({
            data: data,
            loading: data.loading
        })
    }

    async updateFilter(update) {
        if(update && Object.keys(update)[0] !== null){
            this.setState({
                loading: true
            });
            switch(Object.keys(update)[0]) {
                case 'startDate':
                    this.params.startDate = update.startDate;
                    break;
                case 'endDate':
                    this.params.endDate = update.endDate;
                    break;
                case 'userLevel':
                    this.params.userLevel = update.userLevel;

                    if(update.userLevel === 0){
                        const data = await this.mortalityPlotApi.getMortalityPlotForDrOnly(this.params);
                        this.setState({
                            data: data,
                            loading: data.loading
                        });
                    } else {
                        // }
                        const data = await this.mortalityPlotApi.getMortalityPlot(this.params);
                        this.setState({
                            data: data,
                            loading: data.loading
                        });
                    }
                   
                    break;
                default:        
            }
        }
    }
    render() {
        let loadingContent;
        if (this.state.loading) {
            loadingContent = 
            <Col xs={10} md={10}><div className="loading"><img src={loading} alt="loading..."/></div></Col>
        } else {
            loadingContent =  
            <Col xs={8} md={8}>
            { this.state && 
            this.state.data &&
            this.state.data.dot&&
            this.state.data.scatter&&
            this.state.data.benchmark &&
            this.state.data.up &&
            this.state.data.up2 &&
            this.state.data.lo &&
            this.state.data.lo2 &&
                <MortalityPlot
                    dot={this.state.data.dot}
                    scatter={this.state.data.scatter}
                    benchmark={this.state.data.benchmark}
                    up={this.state.data.up}
                    up2={this.state.data.up2}
                    lo={this.state.data.lo}
                    lo2={this.state.data.lo2}
                />
            }
            </Col>;
        }

        return ( 

            <div>
                <Filter updateFilter = {this.updateFilter}/>
                
                <Grid className ='patient_grid'>
                    <Row>
                        {loadingContent}
                    </Row>
                </Grid>
            </div>
        )
    }    
}
export default MorbiMortality;