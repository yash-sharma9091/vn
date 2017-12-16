/* global _, moment */
import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './StudentDetail.css';
import {fullName, formatDate} from '../../lib/Helper';
import MessageIcon from '../../assets/images/svg/envelope-gray.svg';
import ProgressiveImage from '../Common/ProgressiveImage';

class ViewTeacherInfo extends Component {
	render() {
        const {student} = this.props;
        // const style = {
        //     backgroundImage: 'url(' + (IMAGE_PATH + '/' + teacher.profile_image.path) + ')'
        // }
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="teacher-profile-boxes">
                            <div className="p-3">
                                <div className="form-row">
                                    <div className="col-sm-12">
                                        <div className="activity-action-list">
                                            <ul>
                                                <li><a>Delete</a></li>
                                                <li><a>Assign Subject</a></li>
                                                <li><a>Assign Class</a></li>
                                                <li><a>View Parent Info</a></li>
                                            </ul>
                                        </div>
                                        <div className="profiles-mains">
                                            {/*<div className="teacher-profiles" ></div>*/}
                                            <ProgressiveImage className="teacher-profiles" backgroundSrc={student.profile_image.path} />
                                            <span className="text-capitalize">{fullName(student.first_name, student.last_name)}</span>
                                            <button type="button" className="btn btn-link send-mesg-btn pointer">
                                                <img src={MessageIcon} alt="MessageIcon" /> Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group-tehead">Personal Information</div>
                            <div className="p-3">
                                <div className="form-row">
                                    <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">DOB</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{formatDate(student.dob)}</span>
                                    </FormGroup>
                                    <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Subject</Label>
                                            <span className="col-sm-9 col-md-8 word-text">NA</span>
                                            {/*<span className="col-sm-9 col-md-8">
                                                <ul className="code-list">
                                                    <li>E 401</li>
                                                </ul>
                                            </span>*/}
                                     </FormGroup>
                                </div>

                                <div className="form-row">
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Gender</Label>
                                        <span className="col-sm-9 col-md-8 word-text">{_.capitalize(student.gender)}</span>
                                    </FormGroup>
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Student Code</Label>
                                        <span className="col-sm-9 col-md-8 word-text">NA</span>
                                    </FormGroup>
                                </div>

                                <div className="form-row">
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Class</Label>
                                        <span className="col-sm-9 col-md-8 word-text">NA</span>
                                    </FormGroup>
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Additional Health Info</Label>
                                        <span className="col-sm-9 col-md-8 word-text">NA</span>
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="group-tehead"> Contact Information</div>
                            <div className="p-3">
                                <div className="form-row">
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Name</Label>
                                        <span className="col-sm-9 col-md-8 email-text">{student.parent_name}</span>
                                    </FormGroup>
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Email Address</Label>
                                        <span className="col-sm-9 col-md-8 email-text">{student.email_address}</span>
                                    </FormGroup>
                                </div>

                                <div className="form-row">
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Relation</Label>
                                        <span className="col-sm-9 col-md-8 word-text">{student.parent_relation}</span>
                                    </FormGroup>
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Contact Number</Label>
                                        <span className="col-sm-9 col-md-8 word-text">{student.contact_telephoneno}</span>
                                    </FormGroup>
                                </div>

                                <div className="form-row">
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Student Address</Label>
                                        <span className="col-sm-9 col-md-8 word-text">{student.student_address}</span>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		) 
	}
}

export default ViewTeacherInfo;