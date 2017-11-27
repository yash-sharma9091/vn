import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AskQuestion from './AskQuestion';
import FaqAcordian from './FaqAcordian';
import JoinPilotStudy from './JoinPilotStudy';
import './Faq.css';
import URLSearchParams from 'url-search-params';

class FaqTab extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {activeTab: '1'};
    }
    componentDidMount() {
        
        const {location} = this.props;
        if( location ) { 
            let tab = new URLSearchParams(location.search).get('tab'), search = '';
            if( tab === 'contact' ) {
                search = '1';
            }if( tab === 'faq' ) {
                search = '2';
            }if( tab === 'join' ) {
                search = '3';
            }
            this.setState({ activeTab: search })
        }
    }

    toggle(tab) {
        const {history} = this.props;
        if (this.state.activeTab !== tab) {
            let search = '';
            if( tab === '1' ) {
                search = 'contact';
            }if( tab === '2' ) {
                search = 'faq';
            }if( tab === '3' ) {
                search = 'join';
            }
            history.push({search: `?tab=${search}`})
            this.setState({activeTab: tab });
        }
    }

    render() {
        return (
            <div className="faq-tab">
                <Nav tabs className="justify-content-center">
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }} >
                    Ask a Question
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }} >
                    FAQ
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }} >
                    Join Pilot Study 
                    </NavLink>
                </NavItem>
                </Nav>
                <TabContent className="light-sm-bg padding-40" activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <AskQuestion />
                    </TabPane>
                    <TabPane tabId="2">
                        <FaqAcordian />
                    </TabPane>
                    <TabPane tabId="3">
                        <JoinPilotStudy />
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default FaqTab;