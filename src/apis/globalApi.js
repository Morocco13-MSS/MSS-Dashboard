import { Component } from 'react';
import axios from 'axios';

class GlobalApi extends Component {

    async getPatientsGlobal(params) {
        const response = await axios.get('http://localhost:8080/global', {
            params,
        });

        const global = {
            name: 'Patients: ' + response.data.totalPatients,
            children: [
            {
                name: 'Curative: ' + response.data.curativeCount,
                gProps: {
                className: 'red-node',
                onClick: node => {
                    // alert(`Clicked ${node}!`);
                }
                }
            }, {
                name: 'Other',
                children: [
                {
                    name: 'Palli: ' + response.data.palliCount
                },
                {
                    name: 'Missing Data: ' + response.data.missCount
                },
                {
                    name: 'N/A: ' + response.data.nACount
                }]
            }]
        }
        return global;
    }
}
export default GlobalApi;