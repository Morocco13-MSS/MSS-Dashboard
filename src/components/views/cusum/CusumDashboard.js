import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CusumContainer from './CusumContainer'
import CusumApi from '../../../apis/cusumApi.js';
import Config from '../../../config/config'
import './CusumDashboard.css';
import Filter from '../../Filter';
import loading from '../../imgs/loading.gif';

class CusumDashboard extends Component {

    constructor (props) {
        super(props);

        this.state = {
            loading: true,
        }
    
        // API instances 
        this.cusumApi = new CusumApi();

        this.params = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,                  //0-doc, 1-unit, 2-all
            userId: Config.userId         //doc-ID from 36, unit-ID "1,2,3,4"
        }

        // Filter function will be triggered when date or type is changed
        this.updateFilter = this.updateFilter.bind(this);
        this.updateFilter();
    }


    async componentDidMount() {
        const self = this;
        const cusum = await self.cusumApi.getCusumData(self.params);
        self.setState({
            cusum,
            loading: cusum.loading
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
                    break;
                default:        
            }
        }
        const cusum = await this.cusumApi.getCusumData(this.params);
        this.setState({
            cusum,
            loading: cusum.loading
        })
    }

    render() {
        let Content;
        if (this.state.loading) {
            Content = 
            <Col xs={10} md={10}><div className="loading"><img src={loading} alt="loading..."/></div></Col>
        } else {   
            Content =  
            <Col xs={8} md={8}>
            { this.state && 
            this.state.cusum &&
            this.state.cusum.alerts&&
            this.state.cusum.cusumLine&&
            this.state.cusum.ucl &&
            this.state.cusum.lcl &&
        
                <CusumContainer
                    alerts={this.state.cusum.alerts}
                    cusumLine={this.state.cusum.cusumLine}
                    ucl={this.state.cusum.ucl}
                    lcl={this.state.cusum.lcl} 
                />
            }
            </Col>;
        }

        return ( 

            <div>
                <Filter updateFilter = {this.updateFilter}/>
                
                <Grid className ='patient_grid'>
                    <Row>
                        {Content}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default CusumDashboard;