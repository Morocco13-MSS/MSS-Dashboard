import { Component } from 'react';
import axios from 'axios';

class GlobalApi extends Component {

    async getPatientsGlobal(params) {
        const response = await axios.get('http://localhost:8080/global', {
            params,
        });

        const _other = response.data.totalPatients - response.data.curativeCount;
        const chartData = {
            name: 'Total: ' + response.data.totalPatients,
            children: [
            {
                name: 'Curative: ' + response.data.curativeCount,
                gProps: {
                    className: 'red-node',
                }
            },
            {
                name: 'Other: ' + _other,
            }]
        }

        const tileData = {
            curative: response.data.curativeCount,
            palli: response.data.palliCount,
            missing: response.data.missCount,
            na: response.data.nACount
        }

        const global = {
            chartData,
            tileData,
        }
        return global;
    }

    async getGlobalGestType (params) {
        const response = await axios.get('http://localhost:8080/global/gestType', {
            params,
        });

        return response.data;
    }
}
export default GlobalApi;