import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SchoolInfoForm from './SchoolInfoForm';
import SchoolGradeCodes from './SchoolGradeCodes';
import SchoolTeachers from './SchoolTeachers';
import SchoolStudentParents from './SchoolStudentParents';
import './SchoolStep.css';
import URLSearchParams from 'url-search-params';
class SchoolTabs extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }
    componentDidMount() {
        const {location} = this.props;
        let tab = new URLSearchParams(location.search).get('tab');
        
        this.setState({activeTab: tab});
    }
    toggle(tab) {
        const {history} = this.props;
        if (this.state.activeTab !== tab) {
            history.push({search: `?tab=${tab}`})
            this.setState({activeTab: tab });
        }
    }
  	render() {
        const {activeTab} = this.state;
    	return (
            <div className="school-tabs">
                <div className="container">
                    <Nav tabs className="gradient-color-2">
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}>School Information
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}>Grade &amp; Codes
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '3' })}
                        onClick={() => { this.toggle('3'); }}>Teachers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '4' })}
                        onClick={() => { this.toggle('4'); }}>Student &amp; Parents
                        </NavLink>
                    </NavItem>
                    </Nav>
                    <TabContent className="p-3" activeTab={activeTab}>
                        <TabPane tabId="1">
                            {activeTab === '1' && <SchoolInfoForm />}
                        </TabPane>
                        <TabPane tabId="2">
                            {activeTab === '2' && <SchoolGradeCodes />}
                        </TabPane>
                        <TabPane tabId="3">
                            {activeTab === '3' &&<SchoolTeachers />}
                        </TabPane>
                        <TabPane tabId="4">
                            {activeTab === '4' && <SchoolStudentParents />}
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        );
    }
}

export default SchoolTabs; 