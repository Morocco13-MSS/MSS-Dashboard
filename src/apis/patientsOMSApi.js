import { Component } from 'react';
import axios from 'axios';

class PatientsOMSApi extends Component {

    async getPatientsOMS(params) {
        const response = await axios.get('http://localhost:8080/patients/curative/omsgt1', {
            params,
        });

        const oms = {
                    data:         [
                        {name: '>1', value: response.data.omsgrt1},
                        {name: '≤1', value: response.data.omslest1},
                        {name: 'missing', value: response.data.missing}
                    ],
                    gt1: response.data.omsgrt1,
                    total: response.data.totalPatients,
                    lt1: response.data.omslest1,
                    missing: response.data.missing
                }
        return oms;
    }

    async getDrOMSPercentage(params) {
        const response = await axios.get('http://localhost:8080/patients/curative/omsgt1', {
            params,
        });

        const percentage = (response.data.omsgrt1/response.data.totalPatients*100).toFixed(0);
        const drOMS = {
            percentageStr: 'Moi: ' + percentage + '%'
        }
        return drOMS;
    }
}
export default PatientsOMSApi;