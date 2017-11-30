import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SchoolInfoForm from './SchoolInfoForm';
import SchoolGradeCodes from './SchoolGradeCodes';
import SchoolTeachers from './SchoolTeachers';
import './SchoolStep.css';

class SchoolTabs extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({activeTab: tab });
        }
    }
  	render() {
    	return (
        <div className="school-tabs light-bg">
            <div className="container">
                <Nav tabs className="gradient-color-2">
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}>School Information
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}>Grade &amp; Codes
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}>Teachers
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}>Student &amp; Parents
                    </NavLink>
                </NavItem>
                </Nav>
                <TabContent className="p-3" activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <SchoolInfoForm />
                    </TabPane>
                    <TabPane tabId="2">
                        <SchoolGradeCodes />
                    </TabPane>
                    <TabPane tabId="3">
                        <SchoolTeachers />
                    </TabPane>
                    <TabPane tabId="4">
                        jgdfljgdf
                    </TabPane>
                </TabContent>
            </div>
        </div>
            );
        }
}

export default SchoolTabs; 