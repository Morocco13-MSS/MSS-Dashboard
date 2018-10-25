import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Patients from './views/patients/PatientsDashboard'
import Global from './views/global/GlobalDashboard'


class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Global}/>
                    <Route path='/global' component={Global}/>
                    <Route path='/patients' component={Patients}/>
                </Switch>
            </main>
        )};
    }
export default Main;