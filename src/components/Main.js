import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Patients from './views/patients/PatientsDashboard'
import Global from './views/global/GlobalDashboard'
import Preoperative from './views/preoperative/PreoperativeDashboard'
import MorbiMortality from './views/morbi-mortality/MorbiMortalityDashboard'
import Surgery from './views/surgery/SurgeryDashboard'

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Global}/>
                    <Route path='/global' component={Global}/>
                    <Route path='/patients' component={Patients}/>
                    <Route path='/preoperative' component={Preoperative}/>
                    <Route path='/morbi-mortalite' component={MorbiMortality}/>
                    <Route path='/surgery' component={Surgery}/>
                </Switch>
            </main>
        )};
    }
export default Main;