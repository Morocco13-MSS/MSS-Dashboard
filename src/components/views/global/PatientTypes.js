import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import TreeChart from '../../charts/Tree';
import './GlobalDashboard.css'

class PatientTypes extends Component {

    render() {
        return (

            <div>
                <Panel>
                    <Panel.Body>
                    <h4>{this.props.title_dr}</h4>
                    <div className='global_tree'>
                        <TreeChart data={this.props.data_dr}/>
                    </div>
                    <div className='global_panel'>
                        <div className="global_square_left">
                            <div className="global_name"> {'Curatif'}</div>
                            <div className="global_value">{this.props.tile_dr.curative}</div>
                        </div>
                        <div className="global_square_left">
                            <div className="global_name"> {'palliatif'}</div>
                            <div className="global_value">{this.props.tile_dr.palli}</div>
                        </div>
                        <div className="global_square_left">
                            <div className="global_name">{'Missing'}</div>
                            <div className="global_value">{this.props.tile_dr.missing}</div>
                        </div>
                        <div className="global_square_right">
                            <div className="global_name">{'NA'}</div>
                            <div className="global_value">{this.props.tile_dr.na}</div>
                        </div>
                    </div>
                    </Panel.Body>
                </Panel>

                {!this.props.hide_unit &&
                    <Panel>
                        <Panel.Body>
                            <h4>{this.props.title_unit}</h4>
                            <div className='global_tree'>
                                <TreeChart data={this.props.data_unit}/> 
                            </div>
                            <div className='global_panel'>
                                <div className="global_square_left">
                                    <div className="global_name"> {'Curatif'}</div>
                                    <div className="global_value">{this.props.tile_unit.curative}</div>
                                </div>
                                <div className="global_square_left">
                                    <div className="global_name"> {'palliatif'}</div>
                                    <div className="global_value">{this.props.tile_unit.palli}</div>
                                </div>
                                <div className="global_square_left">
                                    <div className="global_name">{'Missing'}</div>
                                    <div className="global_value">{this.props.tile_unit.missing}</div>
                                </div>
                                <div className="global_square_right">
                                    <div className="global_name">{'NA'}</div>
                                    <div className="global_value">{this.props.tile_unit.na}</div>
                                </div>
                            </div>
                        </Panel.Body>
                    </Panel>
                }

                {!this.props.hide_all &&
                    <Panel>
                        <Panel.Body>
                            <h4>{this.props.title_all}</h4>
                            <div className ='global_tree'>
                                <TreeChart data={this.props.data_all}/>
                            </div>
                            <div className='global_panel'>
                                <div className="global_square_left">
                                    <div className="global_name"> {'Curatif'}</div>
                                    <div className="global_value">{this.props.tile_all.curative}</div>
                                </div>
                                <div className="global_square_left">
                                    <div className="global_name"> {'palliatif'}</div>
                                    <div className="global_value">{this.props.tile_all.palli}</div>
                                </div>
                                <div className="global_square_left">
                                    <div className="global_name">{'Missing'}</div>
                                    <div className="global_value">{this.props.tile_all.missing}</div>
                                </div>
                                <div className="global_square_right">
                                    <div className="global_name">{'NA'}</div>
                                    <div className="global_value">{this.props.tile_all.na}</div>
                                </div>
                            </div>
                            
                        </Panel.Body>
                    </Panel>
                }
            </div>
        );
    }
}
export default PatientTypes;