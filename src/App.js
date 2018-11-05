import React, { Component } from 'react';
// import './App.css';
import NavHeader from './components/header/navHeader'
import Main from './components/Main';
import SideNav from './components/navSide/SideNav'
import Config from './config/config'
import Welcome from './components/views/welcome/Welcome'

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loggedIn: Config.loggedIn
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(isLoggedIn, userInfo){
        Config.loggedIn = true;
        Config.loginName = userInfo.loginName;
        Config.loginPWD = userInfo.loginPWD;
        Config.userName = userInfo.userName;
        Config.userId = userInfo.userId;
        Config.unitId = userInfo.unitId;

        this.setState({
          loggedIn: isLoggedIn
        })
    }

    logout(){
        Config.loggedIn = false;
        Config.loginName = '';
        Config.loginPWD = '';
        Config.userName ='';
        Config.userId = '';
        Config.unitId = '';
    
        this.setState({
          loggedIn: false
        })
    }

    render() {
        let Content;
        if(this.state.loggedIn){
            Content =
                <div>
                <NavHeader logout={this.logout}/>
                <SideNav/>
                <Main className="main"/>
                </div>
        }else{
            Content =
                <Welcome login = {this.login}/>
        }

        return (
            <div>{Content}</div>
        );
    }
}

export default App;
