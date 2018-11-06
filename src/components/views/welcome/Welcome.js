import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Grid, Row, Col, Glyphicon, NavDropdown, MenuItem, Media, Form, FormGroup, FormControl } from 'react-bootstrap';
import Login from './Login'

import './Welcome.css'

class Welcome extends Component {

    render() {
        return (
            <div>
                <Navbar className="welcomeNavbar" staticTop inverse fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Observatoire de Cancer Digestif
                    </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                Accueil
                    </NavItem>
                            <NavDropdown eventKey={3} title="L'Observatoire" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Management du projet</MenuItem>
                                <MenuItem eventKey={3.2}>Process des services</MenuItem>
                                <MenuItem eventKey={3.3}>Charte de l'observatoire</MenuItem>
                                <MenuItem eventKey={3.4}>Documnents</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Formulaires" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>A - Oesophage - Cardia</MenuItem>
                                <MenuItem eventKey={3.2}>B - Estomac</MenuItem>
                                <MenuItem eventKey={3.3}>C - Duodénum - Pancréas - Voies biliaires</MenuItem>
                                <MenuItem eventKey={3.4}>D - Intestin grêle</MenuItem>
                                <MenuItem eventKey={3.5}>E - Colon - Appendice</MenuItem>
                                <MenuItem eventKey={3.6}>F - Rectum - Anus</MenuItem>
                                <MenuItem eventKey={3.7}>G - Foie primitif</MenuItem>
                                <MenuItem eventKey={3.8}>H - Métastases hépatiques</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={4} href="#">
                                Nous contacter
                    </NavItem>
                            <NavItem eventKey={5} href="#">
                                Forum de discussion
                    </NavItem>
                            <NavItem eventKey={6} href="#">
                                Partenaires
                    </NavItem>
                            <NavItem eventKey={7} href="#">
                                <Glyphicon bsClass="glyphicon" glyph="search" />
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="welcomeHeader"><span>Accueil</span>
                </div>
                <Grid className='patient_grid'>
                    <Row>
                        <Col xs={9} md={9}>


                            <div>
                                <div class="firstTitle">
                                    <h3>Résumé du protocole</h3>
                                </div>
                                <Media>
                                    <Media.Body>
                                        <Media.Heading>Titre de l’étude</Media.Heading>
                                        <p>
                                            Observatoire de la qualité des actes de chirurgie pour cancers digestifs: projet pilote (AP201951/16).
                                        </p>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <Media.Body>
                                        <Media.Heading>Numéro de référence</Media.Heading>
                                        <p>
                                            201951/AP2016
                                        </p>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <Media.Body>
                                        <Media.Heading>Promoteur</Media.Heading>
                                        <p>
                                            <a class="cBlack" href="http://www.somachir.com">Société Marocaine de Chirurgie (www.somachir.com)</a>
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Media>
                                    <Media.Body>
                                        <Media.Heading>Centres investigateurs</Media.Heading>
                                        <ul>
                                            <li>Service de Chirurgie “A”, Hôpital Ibn Sina (Rabat, Maroc)</li>
                                            <li>Service de Chirurgie “C”, Hôpital Ibn Sina (Rabat, Maroc)</li>
                                            <li>Service de Chirurgie Carcinologique digestive, Institut National d’Oncologie (Rabat, Maroc)</li>
                                            <li>Service de Chirurgie Carcinologique, Centre Régional d’Oncologie (Oujda, Maroc)</li>

                                        </ul>

                                    </Media.Body>
                                </Media>

                                <Media>
                                    <Media.Body>
                                        <Media.Heading>
                                            Période de l’étude
                                        </Media.Heading>
                                        <p>
                                            A partir de janvier 2018, période d’inclusion de 3 ans.
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Media>
                                    <Media.Body>
                                        <Media.Heading>Rationnel et justification</Media.Heading>
                                        <p class="justify">
                                        La chirurgie occupe une place centrale dans les stratégies thérapeutiques curatives des cancers digestifs. Elle se caractérise par une complexité́, une morbidité́ et des coûts importants. Il existe un contraste notable entre l'existence de normes acceptées de qualité́ chirurgicale (référentiels nationaux ou régionaux de bonne pratique en chirurgie cancérologique) et la disparité́ des résultats enregistrés. En complément à une stratégie de concentration des cas complexes dans des centres à haut volume d’activité, la disparité des résultats de la chirurgie a justifié la mise en place par des sociétés savantes européennes de systèmes d’assurance qualité́ dédiés à une ou plusieurs localisations de cancer digestif. L’analyse de ces expériences a montré que l’implémentation de registres d’audit chirurgical sans mesure interventionnelle spécifique initiale avait un impact positif, rapide et coût-efficace sur les taux de complications, les taux de récidive ainsi que sur la survie globale. L’analyse des données recueillies a par ailleurs permis d’améliorer les connaissances et donc la prise en charge de sous-groupes de patients habituellement exclus des essais cliniques.
                                            Au Maroc, l’équité et la qualité sont deux des valeurs retenues par Plan National de Prévention et de Contrôle du Cancer (PNPCC, 2010-2019). Ces valeurs impliquent respectivement le développement «d’une offre de soins identiques pour tous et accessibles» et «d’une prise en charge complète répondant au normes». D’un point de vue opérationnel, les mesures 53 et 54 du PNPCC prévoient la mise en place d’un système d’assurance qualité́ avec l’instauration d’un système de suivi et d’évaluation 
                                            de la prise en charge des patients. 
                                         </p>
                                    </Media.Body>
                                </Media>

                                <Media>
                                    <Media.Body>
                                        <Media.Heading>
                                            Schéma de l'étude
                                        </Media.Heading>
                                        <p class="justify">
                                        Etude clinique prospective multicentrique observationnelle, évaluant la qualité des actes de chirurgie pour cancers digestifs prouvés ou suspectés (intention de traiter).
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Media>
                                    <Media.Body>
                                        <Media.Heading>
                                        Nombre de patients 
                                        </Media.Heading>
                                        <p class="justify">
                                        Nombre total de patients attendus: 1500 (500 patients/an sur 3 ans d’étude) 
                                        
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Media>
                                    <Media.Body>
                                        <Media.Heading>
                                        Objectifs de l’étude
                                        </Media.Heading>
                                        <p class="justify">
                                        Evaluer la qualité des résultats de la chirurgie pour cancers digestifs dans les centres investigateurs.

                                        </p>
                                    </Media.Body>
                                </Media>

                                <Media>
                                    <Media.Body>
                                        <Media.Heading>
                                        Population de patients de l’étude                                        </Media.Heading>
                                        <p class="justify">
                                        Patients de sexes masculin et féminin âgés de 16 ans et plus opérés dans un des centres investigateurs pour un cancer de localisation digestive prouvé ou suspecté, à visée curative ou palliative, en situation élective ou urgente.
                                        </p>
                                    </Media.Body>
                            
                            
                                </Media>
                              
                                <Media>
                                    <Media.Body>
                                        <Media.Heading>
                                        Principaux critères d’inclusion 
                                        </Media.Heading>
                                        <ul class="noStyleList">
                                            <li class="justify"><span class="margin5R">1.</span>Patient de sexes masculin et féminin âgés de 16 ans et plus opéré pour  un cancer de localisation digestive, prouvé ou suspecté, à visée curative ou palliative</li>
                                            <ol class="justify"><span class="margin5R">1.</span>En situation élective: inclusion à partir de la programmation pour chirurgie</ol>
                                            <ol class="justify"><span class="margin5R">2.</span>En situation urgente: inclusion au plus tard 72 heures après la  chirurgie</ol>
                                            <li class="justify"><span class="margin5R">2.</span>Cancer prouvé ou suspecté dans les localisations digestives suivantes: colon, appendice, anus, rectum, oesophage, estomac, jonction oeso-gastrique, voies biliaires, ampoule de Vater, pancréas, duodénum,  intestin grêle et foie.</li>
                                            <li class="justify"><span class="margin5R">3.</span>Patient disposé et apte à donner son accord pour participer à l’étude.</li>
                                        </ul>


                                    </Media.Body>
                                </Media>
                            
                            
                                <Media>
                                    <Media.Body>
                                        <Media.Heading>
                                        Principaux critères d’exclusion 
                                        </Media.Heading>
                                        <ul class="noStyleList">
                                            <li class="justify "><span class="margin5R">1.</span>Patient dont l’intervention chirurgicale est indiquée pour:</li>
                                            <ol class="justify deco1List">
                                            <li>Une affection qui n’est pas un cancer de localisation digestive, 
                                                y compris si rétrospectivement l’exploration chirurgicale et/ou l’examen histologique révèle un cancer de localisation 
                                                digestive</li>
                                            <li>Un cancer prouvé ou suspecté de localisation non digestive</li>
                                            <li>Un cancer prouvé ou suspecté de localisation péritonéale</li>
                                            </ol>
                                            <li class="justify"><span class="margin5R">2.</span>Patient dont l’intervention chirurgicale est indiquée pour une poursuite évolutive ou une récidive locale prouvée ou suspectée d’un cancer de localisation digestive ayant déjà fait l’objet d’une intervention chirurgicale (à l’exception des situations d’hépatectomie itérative pour métastase hépatique et de reprise du lit tumoral après découverte d’un cancer vésiculaire sur pièce de cholécystectomie).
                                            </li>
                                            <li class="justify"><span class="margin5R">3.</span>Patients dont l’intervention est à visée diagnostique sans aucune intention curative ou palliative</li>
                                            <li class="justify"><span class="margin5R">4.</span>Patients dont l’intervention chirurgicale est une transplantation hépatique.</li>
                                            <li class="justify"><span class="margin5R">5.</span>Patients dont l’intervention chirurgicale est une destruction locale (radiofréquence, micro-ondes) par voie percutanée exclusive (sans laparotomie ou laparoscopie).</li>


                                        </ul>
                                        


                                    </Media.Body>
                                </Media>

                                <div class="firstTitle">
                                    <h3>Critères d’évaluation de l’étude clinique</h3>
                                </div>
                            

                                  <Media>
                                    <Media.Body>
                                        <Media.Heading>
                                        
                                        Critère d’évaluation principal
                                        </Media.Heading>
                                        <p>
                                        Conformité des pratiques des centres investigateurs par rapport aux référentiels de chirurgie des cancers de localisation digestive

                                        </p>
                                    </Media.Body>
                                </Media>


                                  <Media>
                                    <Media.Body>
                                        <Media.Heading>
                                        
                                        Critères d’évaluation secondaires
                                        </Media.Heading>
                                        <p>

                                        Résultats de la chirurgie des cancers de localisation digestive en termes de:
                                        Morbidité et mortalité postopératoires.
                                        Radicalité “histologique” de la chirurgie.
                                        Survie globale et survie sans récidive.
                                        Qualité de vie (mesurée une fois pour un sous-groupe sélectionnée dans cette cohorte).
                                        </p>
                                    </Media.Body>
                                </Media>

                            </div>
                    </Col>
                        <Col xs={2} md={2} className="loginContainer">
                            <Login login={this.props.login} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Welcome;