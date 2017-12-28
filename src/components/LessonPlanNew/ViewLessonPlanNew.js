/* global _ */
import React, {Component} from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import './LessonPlanNew.css';
import {fullName} from '../../lib/Helper';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
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
                                            <div className="p-4">
                                                <div class="d-flex justify-content-center">
                                                    <div class="d-flex flex-row col-sm-6">
                                                        <div class="p-2">Add Content:
                                                            <ul>
                                                                <li><a><img src="" alt="" />Embed</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="p-2">Add Question:
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            gfdgfd
                                        </TabPane>
                                        <TabPane tabId="3">
                                            gfdgfd
                                        </TabPane>
                                        <TabPane tabId="4">
                                            gfdgfd
                                        </TabPane>
                                        <TabPane tabId="5">
                                            gfdgfd
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