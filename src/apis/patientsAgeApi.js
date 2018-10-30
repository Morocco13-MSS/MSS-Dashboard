import { Component } from 'react';
import axios from 'axios';

class PatientsAgeApi extends Component {

    async getPatientsAge(params) {
        const response = await axios.get('http://localhost:8080/patients/curative/agegt70', {
            params,
        });

        console.log(response);

        const age = {
            data: [
                {name: '≥70', value: response.data.gtAge70},
                {name: '<70', value: response.data.ltAge70},
                {name: 'missing', value: response.data.missing}
            ],
            missing: response.data.missing,
            gt70: response.data.gtAge70,
            lt70: response.data.ltAge70,
            total: response.data.totalPatients
        }
        return age;
    }

    async getDrAGEPercentage(params) {
        const response = await axios.get('http://localhost:8080/patients/curative/agegt70', {
            params,
        });

        const percentage = (response.data.gtAge70/response.data.totalPatients*100).toFixed(0);
        const drAge = {
            percentageStr: 'Myself: ' + percentage + '%'
        }
        return drAge;
    }
}
export default PatientsAgeApi;