import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SchoolAddTeacher from './SchoolAddTeacher';
import SchoolBulkUpload from './SchoolBulkUpload';
import './SchoolStep.css';

class SchoolTeachers extends Component {
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
    	return (
            
        <div className="teacher-tabs">
            <div className="d-flex justify-content-center">
            <Nav tabs className="col-sm-8 pr-0">
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}>
                        <h2>Add Teacher</h2>
                        <span>Add Teacher Manually</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}>
                        <h2>Bulk Upload</h2>
                        <span>You can easily upload multiple teacher via csv</span>
                    </NavLink>
                </NavItem>
            </Nav>
            </div>
            <TabContent className="pt-3 pb-3" activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <SchoolAddTeacher/>
                </TabPane>
                <TabPane tabId="2">
                    <SchoolBulkUpload />
                </TabPane>
            </TabContent>
        </div>
            );
        }
}

export default SchoolTeachers;