import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Welcome extends Component {
    
    login(){
        this.props.login(true);
    }

    render() {
        return ( 
            <div> 
                <Button bsStyle="info" onClick={() => this.login()}>Click me to login</Button>
                <h4>welcome page</h4>
            </div>   
        )
    }
}
export default Welcome;