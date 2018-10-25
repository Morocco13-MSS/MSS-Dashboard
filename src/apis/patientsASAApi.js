import { Component } from 'react';
import axios from 'axios';

class PatientsASAApi extends Component {

    async getPatientsASA(params) {
        const response = await axios.get('http://localhost:8080/global', {
            params,
        });

        const asa = {
                    data:         [
                        {name: '≥2', value: 30},
                        {name: '<2', value: 12},
                        {name: 'missing', value: 10}
                    ],
                    gt2: 30,
                    total: 52
                }
        return asa;
    }
}
export default PatientsASAApi;