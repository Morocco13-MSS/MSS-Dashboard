import React, { Component } from 'react';

class GestTiles extends Component {

    render () {

        return (
            <div>
                <div className='global_panel'>
                    <div className="gest_square_left">
                        <div className="gest_name_dr"> {'ColD'}</div>
                        <div className="gest_value">{this.props.dr.colectomyRight}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_dr"> {'ColTr'}</div>
                        <div className="gest_value">{this.props.dr.colectomieTrans}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_dr">{'CGH'}</div>
                        <div className="gest_value">{this.props.dr.colectomy_left_high}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_dr">{'Sig'}</div>
                        <div className="gest_value">{this.props.dr.sigmoidectomy}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_dr"> {'HCG'}</div>
                        <div className="gest_value">{this.props.dr.hemicolectomy_left}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_dr"> {'Tot'}</div>
                        <div className="gest_value">{this.props.dr.colectomy_total}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_dr">{'CPT'}</div>
                        <div className="gest_value">{this.props.dr.coloproctectomy}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_dr">{'Deriv'}</div>
                        <div className="gest_value">{this.props.dr.internal_deri}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_dr">{'Sto'}</div>
                        <div className="gest_value">{this.props.dr.ostomy_alone}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_dr">{'Exp'}</div>
                        <div className="gest_value">{this.props.dr.explorer}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_dr">{'NA'}</div>
                        <div className="gest_value">{this.props.dr.naCount}</div>
                    </div>
                    <div className="gest_square_right">
                        <div className="gest_name_dr">{'Total'}</div>
                        <div className="gest_value">{this.props.dr.totalPatients}</div>
                    </div>
                </div>
                {!this.props.hide_unit &&
                <div className='global_panel'>
                    <div className="gest_square_left">
                        <div className="gest_name_unit"> {'ColD'}</div>
                        <div className="gest_value">{this.props.unit.colectomyRight}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_unit"> {'ColTr'}</div>
                        <div className="gest_value">{this.props.unit.colectomieTrans}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_unit">{'CGH'}</div>
                        <div className="gest_value">{this.props.unit.colectomy_left_high}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_unit">{'Sig'}</div>
                        <div className="gest_value">{this.props.unit.sigmoidectomy}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_unit"> {'HCG'}</div>
                        <div className="gest_value">{this.props.unit.hemicolectomy_left}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_unit"> {'Tot'}</div>
                        <div className="gest_value">{this.props.unit.colectomy_total}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_unit">{'CPT'}</div>
                        <div className="gest_value">{this.props.unit.coloproctectomy}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_unit">{'Deriv'}</div>
                        <div className="gest_value">{this.props.unit.internal_deri}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_unit">{'Sto'}</div>
                        <div className="gest_value">{this.props.unit.ostomy_alone}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_unit">{'Exp'}</div>
                        <div className="gest_value">{this.props.unit.explorer}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_unit">{'NA'}</div>
                        <div className="gest_value">{this.props.unit.naCount}</div>
                    </div>
                    <div className="gest_square_right">
                        <div className="gest_name_unit">{'Total'}</div>
                        <div className="gest_value">{this.props.unit.totalPatients}</div>
                    </div>
                </div>
                }
                {!this.props.hide_all &&
                <div className='global_panel'>
                    <div className="gest_square_left">
                        <div className="gest_name_all"> {'ColD'}</div>
                        <div className="gest_value">{this.props.all.colectomyRight}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_all"> {'ColTr'}</div>
                        <div className="gest_value">{this.props.all.colectomieTrans}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_all">{'CGH'}</div>
                        <div className="gest_value">{this.props.all.colectomy_left_high}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_all">{'Sig'}</div>
                        <div className="gest_value">{this.props.all.sigmoidectomy}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_all"> {'HCG'}</div>
                        <div className="gest_value">{this.props.all.hemicolectomy_left}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_all"> {'Tot'}</div>
                        <div className="gest_value">{this.props.all.colectomy_total}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_all">{'CPT'}</div>
                        <div className="gest_value">{this.props.all.coloproctectomy}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_all">{'Deriv'}</div>
                        <div className="gest_value">{this.props.all.internal_deri}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_all">{'Sto'}</div>
                        <div className="gest_value">{this.props.all.ostomy_alone}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_all">{'Exp'}</div>
                        <div className="gest_value">{this.props.all.explorer}</div>
                    </div>
                    <div className="gest_square_left">
                        <div className="gest_name_all">{'NA'}</div>
                        <div className="gest_value">{this.props.all.naCount}</div>
                    </div>
                    <div className="gest_square_right">
                        <div className="gest_name_all">{'Total'}</div>
                        <div className="gest_value">{this.props.all.totalPatients}</div>
                    </div>
                </div>
                }
            </div>
            
            
        );
    }
}

export default GestTiles;