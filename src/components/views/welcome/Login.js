import React, { Component } from 'react';
import {ControlLabel, FormGroup, FormControl, Button, Col, Form} from 'react-bootstrap';
import './Welcome.css';
import axios from 'axios';

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            loginName: '',
            loginPWD:''
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePWDChange = this.handlePWDChange.bind(this);
    }

    async login(){
        if(this.state.loginName && this.state.loginPWD){
            const params={
                userName: this.state.loginName,  // "majbar",  or "benkabbou"
                passwd:  this.state.loginPWD     // anything for now
            }

            axios.get('http://localhost:8080/login', 
                { params: params }
            )
            .then(res => {
                const userInfo = {
                    loginName: this.state.loginName,
                    loginPWD: this.state.loginPWD,
                    userName: res.data.name,
                    userId: res.data.userId,
                    unitId: res.data.UnitId,
                }
                this.props.login(true, userInfo);
            }) 
        } 
    }

    handleUserNameChange(e) {
        this.setState({ loginName: e.target.value });
    }

    handlePWDChange(e) {
        this.setState({ loginPWD: e.target.value });
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <ControlLabel>Identifiant</ControlLabel>
                    <FormControl 
                        type="text" 
                        placeholder="Identifiant" 
                        onChange={this.handleUserNameChange}
                    />
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <ControlLabel>Mot de passe</ControlLabel>
                    <FormControl 
                        type="password" 
                        placeholder="Mot de passe" 
                        onChange={this.handlePWDChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Col >
                        <Button className="pull-right"
                            onClick={() => this.login()}
                        >Se connecter
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
export default Login;