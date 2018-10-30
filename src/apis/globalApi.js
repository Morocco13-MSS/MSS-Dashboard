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

    async getPatientsGestType (params_dr, params_unit, params_all) {

        const response_dr = await axios.get('http://localhost:8080/global/gestType', {
            params: params_dr,
        });
        const data_dr = response_dr.data;

        const response_unit = await axios.get('http://localhost:8080/global/gestType', {
            params: params_unit,
        });
        const data_unit = response_unit.data;

        const response_all = await axios.get('http://localhost:8080/global/gestType', {
            params: params_all,
        });
        const data_all = response_all.data;

        const data = [
            {
                subject: 'colectomyRight', 
                dr: (data_dr.colectomyRight/data_dr.totalPatients * 100).toFixed(0), 
                unit:(data_unit.colectomyRight/data_unit.totalPatients * 100).toFixed(0),  
                all:(data_all.colectomyRight/data_all.totalPatients * 100).toFixed(0), 
                full: 100 
            },
            { 
                subject: 'colectomieTrans', 
                dr: (data_dr.colectomieTrans/data_dr.totalPatients * 100).toFixed(0), 
                unit:(data_unit.colectomieTrans/data_unit.totalPatients * 100).toFixed(0),  
                all:(data_all.colectomieTrans/data_all.totalPatients * 100).toFixed(0), 
                full: 100 
            },
            { 
                subject: 'colectomy_left_high', 
                dr: (data_dr.colectomy_left_high/data_dr.totalPatients * 100).toFixed(0), 
                unit:(data_unit.colectomy_left_high/data_unit.totalPatients * 100).toFixed(0),  
                all:(data_all.colectomy_left_high/data_all.totalPatients * 100).toFixed(0), 
                full: 100 
            },
            { 
                subject: 'sigmoidectomy', 
                dr: (data_dr.sigmoidectomy/data_dr.totalPatients * 100).toFixed(0), 
                unit:(data_unit.sigmoidectomy/data_unit.totalPatients * 100).toFixed(0),  
                all:(data_all.sigmoidectomy/data_all.totalPatients * 100).toFixed(0), 
                full: 100 
            },
            { 
                subject: 'hemicolectomy_left', 
                dr: (data_dr.hemicolectomy_left/data_dr.totalPatients * 100).toFixed(0), 
                unit:(data_unit.hemicolectomy_left/data_unit.totalPatients * 100).toFixed(0),  
                all:(data_all.hemicolectomy_left/data_all.totalPatients * 100).toFixed(0), 
                full: 100 
            },
            { 
                subject: 'colectomy_total', 
                dr: (data_dr.colectomy_total/data_dr.totalPatients * 100).toFixed(0), 
                unit:(data_unit.colectomy_total/data_unit.totalPatients * 100).toFixed(0),  
                all:(data_all.colectomy_total/data_all.totalPatients * 100).toFixed(0), 
                full: 100 
            },
            { 
                subject: 'coloproctectomy', 
                dr: (data_dr.coloproctectomy/data_dr.totalPatients * 100).toFixed(0), 
                unit:(data_unit.coloproctectomy/data_unit.totalPatients * 100).toFixed(0),  
                all:(data_all.coloproctectomy/data_all.totalPatients * 100).toFixed(0), 
                full: 100 
            },
            { 
                subject: 'internal_deri', 
                dr: (data_dr.internal_deri/data_dr.totalPatients * 100).toFixed(0), 
                unit:(data_unit.internal_deri/data_unit.totalPatients * 100).toFixed(0),  
                all:(data_all.internal_deri/data_all.totalPatients * 100).toFixed(0), 
                full: 100 
            },
            { 
                subject: 'ostomy_alone', 
                dr: (data_dr.ostomy_alone/data_dr.totalPatients * 100).toFixed(0), 
                unit:(data_unit.ostomy_alone/data_unit.totalPatients * 100).toFixed(0),  
                all:(data_all.ostomy_alone/data_all.totalPatients * 100).toFixed(0), 
                full: 100 
            },
            { 
                subject: 'explorer', 
                dr: (data_dr.explorer/data_dr.totalPatients * 100).toFixed(0), 
                unit:(data_unit.explorer/data_unit.totalPatients * 100).toFixed(0),  
                all:(data_all.explorer/data_all.totalPatients * 100).toFixed(0), 
                full: 100 
            }
        ];

        const tile_data = {
            dr: data_dr,
            unit: data_unit,
            all: data_all
        }

        const gestType = {
            data,
            tile_data,
        }

        console.log(tile_data);

        return gestType;
    }
}
export default GlobalApi;