import { Component } from 'react';
import axios from 'axios';

class PatientsBMIWLApi extends Component {

    async getPatientsBMIWL(params) {
        const response = await axios.get('http://localhost:8080/patients/curative/bmi_wtloss', {
            params,
        });
 
        const bmiwl = 
        {
            name: 'Patients',
            bmilt18: response.data.bmilt18,
            bmiOther: response.data.totalPatients-response.data.bmilt18-response.data.missingbmi,
            missingbmi: response.data.missingbmi,
            wlosslt10per: response.data.wlosslt10per,
            wlossOther: response.data.totalPatients-response.data.wlosslt10per-response.data.missingwloss,
            missingwloss: response.data.missingwloss
        }
        // const bmi = 
        // {
        //     name: 'bmi',
        //     bmilt18: response.data.bmilt18,
        //     bmiOther: response.data.totalPatients-response.data.bmilt18-response.data.missingbmi,
        //     missingbmi: response.data.missingbmi,
        //     wlosslt10per: response.data.wlosslt10per,
        //     wlossOther: response.data.totalPatients-response.data.wlosslt10per-response.data.missingwloss,
        //     missingwloss: response.data.missingwloss
        // }
        return bmiwl;
    }
}
export default PatientsBMIWLApi;



// bmigt30: 1
// bmilt18: 3
// missingbmi: 0
// missingwloss: 8
// totalPatients: 30
// wlossgt10per: 3
// wlosslt10per: 4
// {name: 'Patients', bmi_lt_18: 5, bmi_other: 40, bmi_missing: 10, wl_gt_10: 12, wl_other: 23, wl_missing: 5},

// {name: 'Patients', bmi_lt_18: 5, bmi_other: 40, wl_gt_10: 12, wl_other: 33},