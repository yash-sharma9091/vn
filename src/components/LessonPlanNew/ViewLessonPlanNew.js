/* global _ */
import React, {Component} from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import './LessonPlanNew.css';
import {fullName} from '../../lib/Helper';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import DoNow from './DoNow.js';
import GuidedPractice from './GuidedPractice.js';
import IndependentPractice from './IndependentPractice.js';
import HomeWork from './HomeWork.js';
import Assign from './Assign.js';
import donow1 from '../../assets/images/donow-1.png';
import donow2 from '../../assets/images/donow-2.png';
import donow3 from '../../assets/images/donow-3.png';
import donow4 from '../../assets/images/donow-4.png';
import donow5 from '../../assets/images/donow-5.png';
import donow6 from '../../assets/images/donow-6.png';
import donow7 from '../../assets/images/donow-7.png';
import donow8 from '../../assets/images/donow-8.png';
import donow9 from '../../assets/images/donow-9.png';
import donow10 from '../../assets/images/donow-10.png';
import donow11 from '../../assets/images/donow-11.png';
import donow12 from '../../assets/images/donow-12.png';
import menuLine from '../../assets/images/svg/menu-line.svg';
import addPlus from '../../assets/images/svg/add-plus-button.svg';
import classnames from 'classnames';

class ViewLessonPlanNew extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }
	render() {
        const {teacher} = this.props;
        /*const style = {
            backgroundImage: 'url(' + (IMAGE_PATH + '/' + teacher.profile_image.path) + ')'
        }*/
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="teacher-profile-boxes">
                            <div className="lesson-tabs">
                                    <Nav tabs className="nav-fill">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Do Now
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '2' })}onClick={() => { this.toggle('2'); }}>Guided Practice
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>Independent Practice
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '4' })}onClick={() => { this.toggle('4'); }}>Home Work
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '5' })}onClick={() => { this.toggle('5'); }}>Assign
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <DoNow />
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <GuidedPractice />
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <IndependentPractice />
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <HomeWork />
                                        </TabPane>
                                        <TabPane tabId="5">
                                            <Assign />
                                        </TabPane>
                                    </TabContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		) 
	}
}

export default ViewLessonPlanNew;