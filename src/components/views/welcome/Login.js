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
                    <ControlLabel>User ID</ControlLabel>
                    <FormControl 
                        type="text" 
                        placeholder="User ID" 
                        onChange={this.handleUserNameChange}
                    />
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl 
                        type="password" 
                        placeholder="Password" 
                        onChange={this.handlePWDChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Col smOffset={7}>
                        <Button
                            onClick={() => this.login()}
                        >Sign in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
export default Login;