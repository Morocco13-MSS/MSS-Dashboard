import React, { Component } from 'react';
import MSSRadar from '../../charts/MSSRadar';
import GestTile from './GestTile';
import {Panel} from 'react-bootstrap';


class GestTypes extends Component {

    render () {
        return (
            <Panel>
                <Panel.Body>
                    <h4>{'Gestation Types'}</h4>
                    <MSSRadar 
                        data={this.props.data}
                        hide_unit = {this.props.hide_unit}
                        hide_all = {this.props.hide_all}
                    />
                    <GestTile 
                        dr={this.props.tile_data.dr} 
                        unit={this.props.tile_data.unit}
                        all={this.props.tile_data.all}
                        hide_unit = {this.props.hide_unit}
                        hide_all = {this.props.hide_all}
                    />
                    
                </Panel.Body>
            </Panel>
            
        );
    }
}

export default GestTypes;