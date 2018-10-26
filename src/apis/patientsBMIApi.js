import { Component } from 'react';
import axios from 'axios';

class PatientsBMIApi extends Component {

    async getPatientsBMI(params) {
        const response = await axios.get('http://localhost:8080/patients/curative/bmi', {
            params,
        });

        console.log(response)
        const other = response.data.totalPatients-response.data.bmigt30-response.data.bmilt18-response.data.missingbmi;

        const bmi = {
                    data1:
                    [
                        {name: '>30', value: response.data.bmigt30},
                        {name: '<18', value: response.data.bmilt18},
                        {name: 'missing', value: response.data.missingbmi},
                        {name: 'other', value: other},
                    ],
                    data2:
                    [
                        {name: '<18 and >30', value: response.data.bmigt30 + response.data.bmilt18}
                    ],
                    gt30: response.data.bmigt30,
                    lt18: response.data.bmilt18,
                    total: response.data.totalPatients,
                    other: other,
                    missing: response.data.missingbmi
                }
        return bmi;
    }
}
export default PatientsBMIApi;