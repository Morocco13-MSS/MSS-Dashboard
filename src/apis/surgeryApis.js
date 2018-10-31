import { Component } from 'react';
import axios from 'axios';

class preoDaysBeforeSurgeryApi extends Component {

    async getFirstLook(params) {
        const response = await axios.get('http://localhost:8080/surgery/firstlook', {
            params,
        });
        const  result = {
            data: [
                {name: 'laparotomie', value: response.data.laparotomie},
                {name: 'laparoscopie', value: response.data.laparoscopie}, 
                {name: 'laparo_scopie_tomie', value: response.data.laparo_scopie_tomie}
            ],
            'total': response.data.totalPatients,
            'laparotomie': response.data.laparotomie,
            'laparoscopie': response.data.laparoscopie,
            'laparo_scopie_tomie': response.data.laparo_scopie_tomie
        }
        return result;
    }

    async getFirstLookDr(params) {
        const response = await axios.get('http://localhost:8080/surgery/firstlook', {
            params,
        });
        const  dr = {
            'total': response.data.totalPatients,
            'laparotomie': response.data.laparotomie,
            'laparoscopie': response.data.laparoscopie,
            'laparo_scopie_tomie': response.data.laparo_scopie_tomie
        }
        return dr;
    }
}
export default preoDaysBeforeSurgeryApi;