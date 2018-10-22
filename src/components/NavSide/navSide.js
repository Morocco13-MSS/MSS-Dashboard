import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navSide.css';

class NavSide extends Component {
    render() {
        return (
            <div>
                <ButtonGroup vertical>
                <Button bsStyle="link" className="buttonText" >
                    <Link to="/global">Global</Link>
                </Button>
                <Button bsStyle="link" className="buttonText" >
                    <Link to="/patients">Patients</Link>
                </Button>
                <Button bsStyle="link" className="buttonText">Bilan péropératoire</Button>
                <Button bsStyle="link" className="buttonText">Traitemen néoadjuvant</Button>
                <Button bsStyle="link" className="buttonText">Chirurgie</Button>
                <Button bsStyle="link" className="buttonText">Morbi-mortalité</Button>
                <Button bsStyle="link" className="buttonText">Histologie</Button>
                <Button bsStyle="link" className="buttonText">Traitement adjuvant</Button>
                </ButtonGroup>
            </div>
        );
    }
}
export default NavSide;