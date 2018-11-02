import { Component } from 'react';
import axios from 'axios';

class BilanManquantApi extends Component {

    async getBilanManquant(params) {

        const response_mdt = await axios.get('http://localhost:8080/preop/mdt', {
            params,
        });
        const response_thoracique = await axios.get('http://localhost:8080/preop/tdmThoracique', {
            params,
        });
        const response_abdominale = await axios.get('http://localhost:8080/preop/tdmAbdominale', {
            params,
        });

        const bilanManquant = {
            data: [
                {
                    name: 'MDT', 
                    adherent: response_mdt.data.adherentCount, 
                    nonAdherent: response_mdt.data.nonAdherentCount, 
                    missing: response_mdt.data.missCount
                },
                {
                    name: 'TDM thorax', 
                    adherent: response_thoracique.data.adherentCount,
                    nonAdherent: response_thoracique.data.nonAdherentCount,
                    missing: response_thoracique.data.missCount,
                },
                {
                    name: 'TDM abdomen', 
                    adherent: response_abdominale.data.adherentCount, 
                    nonAdherent: response_abdominale.data.nonAdherentCount, 
                    missing: response_abdominale.data.missCount
                }
            ],
            key1: 'adherent',    // the value has to be the same as above data's keys
            key2: 'nonAdherent',
            key3: 'missing',
            mdt_adherent:response_mdt.data.adherentCount,
            mdt_total:response_mdt.data.totalPatients,
            tmd_thorax_adherent:response_thoracique.data.adherentCount,
            tmd_thorax_total:response_thoracique.data.totalPatients,
            tmd_abdomen_adherent:response_abdominale.data.adherentCount,
            tmd_abdomen_total:response_abdominale.data.totalPatients
        }
        return bilanManquant;
    }
}
export default BilanManquantApi;