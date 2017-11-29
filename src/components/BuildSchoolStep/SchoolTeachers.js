import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
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
        this.setState({
            activeTab: tab
        });
        }
    }
  	render() {
    	return (
        <div className="teacher-tabs">
            <Nav tabs>
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
            <TabContent className="p-3" activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    sdfdfdsfds
                </TabPane>
                <TabPane tabId="2">
                    fdsfdsf
                </TabPane>
            </TabContent>
        </div>
            );
        }
}

export default SchoolTabs; 