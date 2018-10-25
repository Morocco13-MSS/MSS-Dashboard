import { Component } from 'react';
import axios from 'axios';

class PatientsASAApi extends Component {

    async getPatientsASA(params) {
        const response = await axios.get('http://localhost:8080/patients/curative/asascoregt2', {
            params,
        });

        const asa = {
            data: [
                {name: '>2', value: response.data.asagt2},
                {name: '≤2', value: response.data.asalt2},
                {name: 'missing', value: response.data.missing}
            ],
            gt2: response.data.asagt2,
            total: '/' + response.data.totalPatients
        }
        return asa;
    }
}
export default PatientsASAApi;