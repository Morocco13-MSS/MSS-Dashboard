import { Component } from 'react';
import axios from 'axios';

class preoDaysBeforeSurgeryApi extends Component {

    async getDaysBeforeSurgery(params) {
        const response = await axios.get('http://localhost:8080/preop/daysBeforeSurgery', {
            params,
        });
        const  result = {
            data: [
                {name: 'lt6weeks', value: response.data.lt6weeks},{name: 'six2etweeks', value: response.data.six2etweeks}, 
                {name: 'gt8weeks', value: response.data.gt8weeks},{name: 'missing', value: response.data.missing}
            ],
            'total': response.data.totalPatients,
            'lt6weeks': response.data.lt6weeks,
            'gt8weeks': response.data.gt8weeks,
            'six2etweeks': response.data.six2etweeks,
            'missing': response.data.missing
        }
        return result;
    }

    async getDrDaysBeforeSurgery(params) {
        const response = await axios.get('http://localhost:8080/preop/daysBeforeSurgery', {
            params,
        });
        const  dr = {
            'total': response.data.totalPatients,
            'lt6weeks': response.data.lt6weeks,
            'gt8weeks': response.data.gt8weeks,
            'six2etweeks': response.data.six2etweeks,
            'missing': response.data.missing
        }
        return dr;
    }
}
export default preoDaysBeforeSurgeryApi;