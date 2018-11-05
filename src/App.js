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
    }

    login(isLoggedIn){
        Config.loggedIn = true;
        this.setState({
          loggedIn: isLoggedIn
        })
    }

    render() {
        let Content;
        if(this.state.loggedIn){
            Content =
                <div>
                <NavHeader/>
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
