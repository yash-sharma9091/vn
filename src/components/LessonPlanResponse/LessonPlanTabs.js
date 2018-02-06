import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Progress } from 'reactstrap';
import apple from '../../assets/images/svg/apple.svg';
import banana from '../../assets/images/svg/banana.svg';
import orange from '../../assets/images/svg/orange.svg';
import pomegranate from '../../assets/images/svg/pomegranate.svg';
import DoKnowContent from './DoKnowContent.js';
import TotalContent from './TotalContent.js';
import GuidedPracticeContent from './GuidedPracticeContent.js';
import IndependentPracticeContent from './IndependentPracticeContent.js';
import HomeWorkContent from './HomeWorkContent.js';

class LessonPlanTabs extends React.Component {
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
        <div>
            <div>
                <div className="lesson-plan-tabs">
                    <Nav tabs className="gradient-color-2">
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                            >
                            Total
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                            >
                            Do Know
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                            >
                            Guided Practice
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                            >
                            Independent Practice
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
                            >
                            Homework
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <TotalContent />
                        </TabPane>
                        <TabPane tabId="2">
                            <DoKnowContent />
                        </TabPane>
                        <TabPane tabId="3">
                            <GuidedPracticeContent />
                        </TabPane>
                        <TabPane tabId="4">
                            <IndependentPracticeContent />
                        </TabPane>
                        <TabPane tabId="5">
                            <HomeWorkContent />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
          
        );
    }
}

export default LessonPlanTabs; 