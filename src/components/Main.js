import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Patients from './Views/Patients'
import Global from './Views/Global'


class Charts extends Component {
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
export default Charts;