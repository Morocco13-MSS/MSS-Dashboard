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
                    total: '/' + response.data.totalPatients
                }
        return oms;
    }
}
export default PatientsOMSApi;