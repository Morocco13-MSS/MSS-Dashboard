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

    async getPerforationContamination(params) {
        const responsePerforation = await axios.get('http://localhost:8080/surgery/perforation', {
            params,
        });

        const responseContamination = await axios.get('http://localhost:8080/surgery/contamination', {
            params,
        });
        const result = {
            data: [
                {
                    name: 'Perforation', 
                    adherent: responsePerforation.data.yesCount, 
                    nonAdherent: responsePerforation.data.noCount, 
                    missing: responsePerforation.data.missing
                },
                {
                    name: 'Contamination', 
                    adherent: responseContamination.data.yesCount,
                    nonAdherent: responseContamination.data.noCount,
                    missing: responseContamination.data.missing,
                }
            ],
            key1: 'adherent',    // the value has to be the same as above data's keys
            key2: 'nonAdherent',
            key3: 'missing',
            perforation_adherent:responsePerforation.data.yesCount,
            perforation_total:responsePerforation.data.totalPatients,
            contamination_adherent:responseContamination.data.yesCount,
            contamination_total:responseContamination.data.totalPatients
        }

        console.log(result);
        return result;
    }

    async getRadicaliteGanglions(params) {
        const rad_response = await axios.get('http://localhost:8080/surgery/radicalityR1', {
            params,
        });

        const gan_response = await axios.get('http://localhost:8080/surgery/lumphNodeExamCount', {
            params,
        });

        const result = {
            data: [
                {
                    name: 'Radicalite', 
                    score: rad_response.data.radicalityR1, 
                    others: rad_response.data.others, 
                    missing: rad_response.data.missing
                },
                {
                    name: 'Ganglions', 
                    score: gan_response.data.examinCountgt12,
                    others: (gan_response.data.totalPatients - gan_response.data.examinCountgt12),
                    missing: 0,
                }
            ],
            key1: 'score',    // the value has to be the same as above data's keys
            key2: 'others',
            key3: 'missing',
            radicalityR1:rad_response.data.radicalityR1,
            rad_total:rad_response.data.totalPatients,
            countgt12:gan_response.data.examinCountgt12,
            con_total:gan_response.data.totalPatients
        }
        return result;
    }
    

    async getAverageBloodLoss(params) {
        const response = await axios.get('http://localhost:8080/surgery/averageBloodLoss', {
            params,
        });
        const result = {
            'total': response.data.totalPatients,
            'averageBloodLoss': response.data.averageBLoss,
            'missing': response.data.missing
        }
        return result;
    }
    

    
}
export default preoDaysBeforeSurgeryApi;