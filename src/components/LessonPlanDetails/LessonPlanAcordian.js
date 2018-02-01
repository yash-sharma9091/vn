import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader, Button } from 'reactstrap';
import './LessonPlanDetails.css';
import plus from '../../assets/images/svg/add.svg';
import shield from '../../assets/images/svg/shield.svg';
import alarmClock from '../../assets/images/svg/set-timer-button.svg';
import apple from '../../assets/images/svg/apple.svg';
import banana from '../../assets/images/svg/banana.svg';
import orange from '../../assets/images/svg/orange.svg';
import pomegranate from '../../assets/images/svg/pomegranate.svg';

class LessonPlanAcordian extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 
            collapse: 1
        };
  }
  
  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === Number(event) ? 1 : Number(event) });
  }
    render() {
        const { collapse} = this.state;
        return (
            <div>
                 <div className="lesson-plan-accordian-list">
							{[1,2, 3].map((val, index) => {
                                        return (
                                            <Card key={index + 1}>
                                                <CardHeader className={`acordian-header ${collapse === (index + 1) ? 'active':''}`}
                                                    onClick={this.toggle} data-event={index + 1}>
                                                    {(index) === 0 ? 'Do Know': (index === 1 ? 'Guided Practice': (index === 2 ? 'Independent Practice':'')) }
                                                    <img className="downArrow" src={plus} alt="" />
                                                </CardHeader>
                                                <Collapse isOpen={collapse === (index + 1)}>
                                                    <CardBody>
                                                        {index === 0 ? 
                                                            (<div className="acordian-content">
                                                        
                                                                <div class="d-flex justify-content-between align-items-center assigned-special-group">
                                                                    <div class="alarm-clock">
                                                                        <img src={alarmClock} alt="" /> <span>20 Min.</span>
                                                                    </div>
                                                                    <div class="shield-box">
                                                                        <img src={shield} alt="" />
                                                                        <span>Assigned Special Group</span>
                                                                        <button type="button" class="btn green-gradient-button">10 Points</button>
                                                                    </div>
                                                                </div>
        
                                                                <div class="assigned-special-group-content">
                                                                    <div class="group-content-box">
                                                                        <h2>What is the root word of memoir? Based on the meaning of the root word. what is the memorie?</h2>
                                                                        <p>Is a collection of memories that an individual writes about moments or events, both public or private, that took place in the subject’s life. The assertions made in the work are understood to be factual.</p>
                                                                    </div>
        
                                                                    <div class="group-content-box">
                                                                        <h2>The information written in a memoir is expected to be true or false?</h2>
                                                                        <p>The text we are about to read is a memoir written by gary soto. Therefore we are about to read (memories about (Gray Soto).</p>
                                                                    </div>
                                                                </div>
                                                                
                                                                
                                                            </div>):
                                                            (index === 1 ? (<div className="acordian-content">
                                                            
                                                                    <div class="d-flex justify-content-between align-items-center assigned-special-group">
                                                                        <div class="alarm-clock">
                                                                            <img src={alarmClock} alt="" /> <span>20 Min.</span>
                                                                        </div>
                                                                        <div class="shield-box">
                                                                            <img src={shield} alt="" />
                                                                            <span>Assigned Special Group</span>
                                                                            <button type="button" class="btn green-gradient-button">10 Points</button>
                                                                        </div>
                                                                    </div>
            
                                                                    <div class="assigned-special-group-content">
                                                                        <div class="group-content-box">
                                                                            <h2>Which Image is an Apple?</h2>
                                                                            <div className="group-content-root-record">
                                                                                    <div class="form-row">
                                                                                        <div class="form-group col-md-12 mb-0">
                                                                                            <div class="form-check form-check-inline">
                                                                                                <label class="form-check-label" for="exampleCheck1">
                                                                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                                                                    <img src={apple} alt="apple" />
                                                                                                </label>
                                                                                            </div>
                                                                                            <div class="form-check form-check-inline">
                                                                                                <label class="form-check-label" for="exampleCheck2">
                                                                                                    <input type="checkbox" class="form-check-input" id="exampleCheck2" />
                                                                                                    <img src={orange} alt="orange" />
                                                                                                </label>
                                                                                            </div>
                                                                                            <div class="form-check form-check-inline">
                                                                                                <label class="form-check-label" for="exampleCheck3">
                                                                                                    <input type="checkbox" class="form-check-input" id="exampleCheck3" />
                                                                                                    <img src={pomegranate} alt="pomegranate" />
                                                                                                </label>
                                                                                            </div>
                                                                                            <div class="form-check form-check-inline">
                                                                                                <label class="form-check-label" for="exampleCheck4">
                                                                                                    <input type="checkbox" class="form-check-input" id="exampleCheck4" />
                                                                                                    <img src={banana} alt="banana" />
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    
                                                                </div>): (index == 2 ? (<div className="acordian-content">
                                                            
                                                                    <div class="d-flex justify-content-between align-items-center assigned-special-group">
                                                                        <div class="alarm-clock">
                                                                            <img src={alarmClock} alt="" /> <span>20 Min.</span>
                                                                        </div>
                                                                        <div class="shield-box">
                                                                            <img src={shield} alt="" />
                                                                            <span>Assigned Special Group</span>
                                                                            <button type="button" class="btn green-gradient-button">10 Points</button>
                                                                        </div>
                                                                    </div>
            
                                                                    <div class="assigned-special-group-content">
                                                                        <div class="group-content-box">
                                                                            <h2>What is the root word of memoir? Based on the meaning of the root word. what is the memorie?</h2>
                                                                            <p>Is a collection of memories that an individual writes about moments or events, both public or private, that took place in the subject’s life. The assertions made in the work are understood to be factual.</p>
                                                                        </div>
            
                                                                        <div class="group-content-box">
                                                                            <h2>The information written in a memoir is expected to be true or false?</h2>
                                                                            <p>The text we are about to read is a memoir written by gary soto. Therefore we are about to read (memories about (Gray Soto).</p>
                                                                        </div>
                                                                        
                                                                        <div class="group-content-box">
                                                                            <h2>What is the root word of memoir? Based on the meaning of the root word. what is the memorie?</h2>
                                                                            <p>Is a collection of memories that an individual writes about moments or events, both public or private, that took place in the subject’s life. The assertions made in the work are understood to be factual.</p>
                                                                        </div>
            
                                                                        <div class="group-content-box">
                                                                            <h2>The information written in a memoir is expected to be true or false?</h2>
                                                                            <p>The text we are about to read is a memoir written by gary soto. Therefore we are about to read (memories about (Gray Soto).</p>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    
                                                                </div>):''))}
                                                    </CardBody>
                                                </Collapse>
                                            </Card>
                                        )
									
                                })
							} 
						</div>
                        
            </div>
        );
    }
}

export default LessonPlanAcordian;