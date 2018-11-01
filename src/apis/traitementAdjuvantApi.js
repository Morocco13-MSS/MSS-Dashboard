import { Component } from 'react';
import axios from 'axios';

class TraitementAdjuvantApi extends Component {
    async getChemoRCT(params) {
        const response = await axios.get('http://localhost:8080/treatmentAdjav/chemo_rct', {
            params,
        });

        const  result = {
            'total': response.data.totalPatients,
            'chemoOrRct': response.data.chemoOrRct,
            'others': response.data.others,
            'missing': response.data.missing
        }
        return result;
    }

    async getTimebwsurgeryAndAdjuv(params) {
        const response = await axios.get('http://localhost:8080/treatmentAdjav/timebwsurgeryAndAdjuv', {
            params,
        });

        const  result = {
            data: [
                {name: 'lessth6weeks', value: response.data.lessth6weeks},
                {name: 'morethan6weeks', value: response.data.morethan6weeks}, 
                {name: 'missing', value: response.data.missing}
            ],
            'total': response.data.totalPatients,
            'lessth6weeks': response.data.lessth6weeks,
            'morethan6weeks': response.data.morethan6weeks,
            'missing': response.data.missing
        }
        return result;
    }

    async getChemoRCTBlood(params) {
        const response = await axios.get('http://localhost:8080/treatmentAdjav/chemo_rct_withBloodCount', {
            params,
        });

        const  result = {
            'total': response.data.totalPatients,
            'chemoOrRct': response.data.chemoOrRct,
            'others': response.data.others,
            'missing': response.data.missing,
        }
        return result;
    }
}
export default TraitementAdjuvantApi;