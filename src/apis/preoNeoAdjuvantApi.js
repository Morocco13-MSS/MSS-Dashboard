import { Component } from 'react';
import axios from 'axios';

class preoNeoAdjuvantApi extends Component {

    async getNeoAdjuvant(params) {
        const response = await axios.get('http://localhost:8080/preop/neoAdjuvant', {
            params,
        });

        const  result = {
            'total': response.data.totalPatients,
            'neoAdjuvant': response.data.neoAdjuvant
        }
        return result;
    }
}
export default preoNeoAdjuvantApi;