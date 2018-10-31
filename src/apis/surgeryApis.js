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

    async getResecAsso(params) {
        const response = await axios.get('http://localhost:8080/surgery/resecAsso', {
            params,
        });
        const  result = {
            data: [
                {name: 'localResec', value: response.data.localResec},
                {name: 'RemoteResec', value: response.data.RemoteResec}, 
                {name: 'localRemoteCnt', value: response.data.localRemoteCnt},
                {name: 'noResecCount', value: response.data.noResecCount},
                {name: 'missing', value: response.data.missing}
            ],
            'total': response.data.totalPatients,
            'localResec': response.data.localResec,
            'RemoteResec': response.data.RemoteResec,
            'localRemoteCnt': response.data.localRemoteCnt,
            'noResecCount': response.data.noResecCount,
            'missing': response.data.missing,
            'na': response.data.naCount
        }
        return result;
    }

    async getResecAssoDr(params) {
        const response = await axios.get('http://localhost:8080/surgery/resecAsso', {
            params,
        });
        const  dr = {
            'total': response.data.totalPatients,
            'localResec': response.data.localResec,
            'RemoteResec': response.data.RemoteResec,
            'localRemoteCnt': response.data.localRemoteCnt,
            'noResecCount': response.data.noResecCount,
            'missing': response.data.missing,
            'na': response.data.naCount
        }
        return dr;
    }
}
export default preoDaysBeforeSurgeryApi;