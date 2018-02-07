import React, {Component} from 'react';
import { Progress } from 'reactstrap';
import classnames from 'classnames';
import apple from '../../assets/images/svg/apple.svg';
import banana from '../../assets/images/svg/banana.svg';
import orange from '../../assets/images/svg/orange.svg';
import pomegranate from '../../assets/images/svg/pomegranate.svg';

class HomeWorkContent extends Component {
    render() {
		return (
            <div>
                <div class="lesson-plan-tabs-content">
                    <div class="heads">Home Work</div>
                    <div class="lesson-planbox-content p-3">
                        <div class="d-flex justify-content-between align-items-center assigned-special-group">
                            <div class="alarm-clock">
                                <img src="/static/media/set-timer-button.3b25a1a2.svg" alt="" /> 
                                <span>20 Min.</span>
                            </div>
                            <div class="shield-box">
                                <span>3 Andswer out of 4</span>
                            </div>
                        </div>
                        <div class="assigned-special-group-content">
                            <div class="group-content-box">
                                <h2>What is the root word of memoir? Based on the meaning of the root word. what is the memorie?</h2>
                                <p>Is a collection of memories that an individual writes about moments or events, both public or private, that took place in the subject’s life. The assertions made in the work are understood to be factual.</p></div><div class="group-content-box"><h2>The information written in a memoir is expected to be true or false?</h2><p>The text we are about to read is a memoir written by gary soto. Therefore we are about to read (memories about (Gray Soto).</p>
                            </div>
                        </div>
                        <div className="progress-range d-flex justify-content-between align-items-center pt-2 pb-3">
                            <div>0</div>
                            <div className="progresss-steps"><Progress value={75} /></div>
                            <div>10</div>
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
                        <div className="progress-range d-flex justify-content-between align-items-center pt-1 pb-3">
                            <div>0</div>
                            <div className="progresss-steps"><Progress value={25} /></div>
                            <div>10</div>
                        </div>
                        <div class="assigned-special-group-content">
                            <div class="group-content-box">
                                <h2>Send Feedback</h2>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Feedback"></textarea>
                                <div className="pt-3 pb-2">
                                    <button type="button" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeWorkContent;
