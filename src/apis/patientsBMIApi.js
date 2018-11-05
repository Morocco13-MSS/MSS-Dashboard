import { Component } from 'react';
import axios from 'axios';

class PatientsBMIApi extends Component {

    async getPatientsBMI(params) {
        const response = await axios.get('http://localhost:8080/patients/curative/bmi_wtloss', {
            params,
        });

        const other = response.data.totalPatients-response.data.bmigt30-response.data.bmilt18-response.data.missingbmi;

        var max = 0;
        if(response.data.wlossgt10per > response.data.bmilt18){
            max = response.data.wlossgt10per;
        }else{
            max = response.data.bmilt18;
        }
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
                    missing: response.data.missingbmi,
                    missingwloss: response.data.missingwloss,
                    wlossgt10per: response.data.wlossgt10per,
                    wlosslt10per: response.data.wlosslt10per,
                    max,
                }
        return bmi;
    }

    async getDrBMIPercentage(params) {
        const response = await axios.get('http://localhost:8080/patients/curative/bmi_wtloss', {
            params,
        });

        const percentage = ((response.data.bmigt30+response.data.bmilt18)/response.data.totalPatients*100).toFixed(0);
        const drBMI = {
            percentageStr: 'Moi: ' + percentage + '%'
        }
        return drBMI;
    }
}
export default PatientsBMIApi;