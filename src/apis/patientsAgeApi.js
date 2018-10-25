import { Component } from 'react';
import axios from 'axios';

class PatientsAgeApi extends Component {

    async getPatientsAge(params) {
        const response = await axios.get('http://localhost:8080/global', {
            params,
        });

        const age = {
                    data:         [
                        {name: '≥70', value: 430},
                        {name: '<70', value: 390},
                        {name: 'missing', value: 300}
                    ],
                    gt70: 430,
                    total: 430+390+300
                }
        return age;
    }
}
export default PatientsAgeApi;