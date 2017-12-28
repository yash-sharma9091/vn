/* global _ */
import React, {Component} from 'react';
import FormField from "../Common/FormField";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {maxLength400} from '../../lib/Validate';
import './Activity.css';
import {connect} from 'react-redux';
import activeImg1 from '../../assets/images/act-img-1.png';
import activeImg2 from '../../assets/images/act-img-2.png';

class Activity extends Component {
	render() {
       
		return (

            <div className="right-group">
                <div className="right-group-content activity-bg">
                    <div className="create-teacher">
                        <div className="p-3 teacher-forms">
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <div className="text-uppercase text-center font-weight-bold teach-head">Activity</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    {/*<div className="p-2 activity-date">November 14, 2017 </div>
                    <div className="now-activity-list p-3">
                        <div className="media">
                            <img className="mr-3" src={activeImg1} alt="activeImg1" />
                            <div className="media-body">
                                <h5 className="mt-0 activity-heading"><black>James B</black> has answered the question for <blue>Do now activity</blue> on Oct 10th of Lesson Tuesday</h5>
                                <div className="activity-questiobox">
                                    <h3>Question 1 : What is the full form of WHO?</h3>
                                    <h4>Full form WHO is________</h4>
                                    <h5>Oct 10. 2017</h5>
                                </div>
                                <div className="write-comment"><a>Write Comment</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="now-activity-list p-3">
                        <div className="media">
                            <img className="mr-3" src={activeImg2} alt="activeImg1" />
                            <div className="media-body">
                                <h5 className="mt-0 activity-heading"><black>Mark C</black> has answered the question for <blue>Do now activity</blue> on Oct 10th of Lesson Tuesday</h5>
                                <div className="activity-questiobox">
                                    <h3>Question 1 : Select Apple Picture</h3>
                                    <h4>A Option</h4>
                                    <h5>Oct 10. 2017</h5>
                                </div>
                                <Field component={FormField} type="textarea" name="" label="" id="studentClass" placeholder="Write your comment here" labelClassName="gradient-color" rows="3" validate={maxLength400} doValidate={true} />
                                <button type="button" className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="now-activity-list p-3">
                        <div className="media">
                            <img className="mr-3" src={activeImg1} alt="activeImg1" />
                            <div className="media-body">
                                <h5 className="mt-0 activity-heading"><black>James B</black> has answered the question for <blue>Do now activity</blue> on Oct 10th of Lesson Tuesday</h5>
                                <div className="activity-questiobox">
                                    <h3>Question 1 : What is the full form of WHO?</h3>
                                    <h4>Full form WHO is________</h4>
                                    <h5>Oct 10. 2017</h5>
                                </div>
                                <div className="write-comment"><a>Write Comment</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="now-activity-list p-3">
                        <div className="media">
                            <img className="mr-3" src={activeImg2} alt="activeImg1" />
                            <div className="media-body">
                                <h5 className="mt-0 activity-heading"><black>Mark C</black> has answered the question for <blue>Do now activity</blue> on Oct 10th of Lesson Tuesday</h5>
                                <div className="activity-questiobox">
                                    <h3>Question 1 : Select Apple Picture</h3>
                                    <h4>A Option</h4>
                                    <h5>Oct 10. 2017</h5>
                                </div>
                                <Field component={FormField} type="textarea" name="" label="" id="studentClass" placeholder="Write your comment here" labelClassName="gradient-color" rows="3" validate={maxLength400} doValidate={true} />
                                <button type="button" className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>*/}

                    {/*<div className="create-teacher">
                        <div className="p-3 teacher-forms">
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <div className="text-uppercase text-center teach-head">Lesson summary</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="form-group">
                            <label className="white-space-nowrap">Subject</label>
                            <ul className="delete-code-list">
                                <li className="e1">E701 <a>x</a></li>
                                <li className="m1">M702 <a>x</a></li>
                                <li className="s1">SS703 <a>x</a></li>
                            </ul>
                        </div>
                        <div className="lesson-theme">
                            <div class="d-flex justify-content-start flex-wrap">
                                <div>
                                    <div className="theme-head">Theme :</div>
                                    <div className="theme-cont">Growing Up</div>
                                </div>
                                <div>
                                    <div className="theme-head">Stategy :</div>
                                    <div className="theme-cont">Point of view/prespective</div>
                                </div>
                                <div>
                                    <div className="theme-head">Subjective :</div>
                                    <div className="theme-cont">Reading &amp; Writing</div>
                                </div>
                                <div>
                                    <div className="theme-head">Standard :</div>
                                    <div className="theme-cont">Reading &amp; Writing</div>
                                </div>
                                <div>
                                    <div className="theme-head">Text :</div>
                                    <div className="theme-cont">The drive in movie by gray solo</div>
                                </div>
                                <div>
                                    <div className="theme-head">Grade Level :</div>
                                    <div className="theme-cont">5/6</div>
                                </div>
                                <div>
                                    <div className="theme-head">Objective :</div>
                                    <div className="theme-cont">Student increase comprehension of text by determining author’s prespetive</div>
                                </div>
                                <div>
                                    <div className="theme-head">Essential Question :</div>
                                    <div className="theme-cont">How do we respond to point of view/prespective questions?</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>        
		) 
	}
}
let ActivityForm = reduxForm({
    form: 'ActivityForm'
})(Activity);

const mapStateToProps = (state) => ({
    user: state.auth.user
})
export default ActivityForm;
