/* global IMAGE_PATH */
import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './StudentDetail.css';
import {fullName} from '../../lib/Helper';

class ViewTeacherInfo extends Component {
	render() {
        const {teacher} = this.props;
        // const style = {
        //     backgroundImage: 'url(' + (IMAGE_PATH + '/' + teacher.profile_image.path) + ')'
        // }
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="teacher-profile-boxes">
                        <div className="p-3">
                                <Form>
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
                                                <div className="teacher-profiles" ></div>
                                                <span>{fullName(teacher.first_name, teacher.last_name)}</span>
                                                <button type="button" class="btn btn-link send-mesg-btn pointer"><img src="/static/media/envelope-gray.822875d8.svg" alt="" /> Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>

                            <div className="group-tehead">Personal Information</div>
                            <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">DOB</Label>
                                                <span className="col-sm-9 col-md-8 word-text">15/05/2001</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Subject</Label>
                                                <span className="col-sm-9 col-md-8">
                                                    <ul className="code-list">
                                                        <li>E 401</li>
                                                    </ul>
                                                </span>
                                         </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Gender</Label>
                                                <span className="col-sm-9 col-md-8 word-text">Male</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Student Code</Label>
                                                <span className="col-sm-9 col-md-8 word-text">AL505</span>
                                        </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Glass</Label>
                                                <span className="col-sm-9 col-md-8 word-text">E 201</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Official Class</Label>
                                                <span className="col-sm-9 col-md-8 word-text">E201</span>
                                        </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Additional Health Info</Label>
                                                <span className="col-sm-9 col-md-8 word-text">NA</span>
                                        </FormGroup>
                                    </div>

                                </Form>
                            </div>

                            <div className="group-tehead"> Contact Information</div>
                            <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Name</Label>
                                                <span className="col-sm-9 col-md-8 email-text">John Kozak</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Email</Label>
                                                <span className="col-sm-9 col-md-8 email-text">jokz@yahoo.com</span>
                                        </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Relation</Label>
                                                <span className="col-sm-9 col-md-8 word-text">Father</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Phone</Label>
                                                <span className="col-sm-9 col-md-8 word-text">212-564-4253</span>
                                        </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Glass</Label>
                                                <span className="col-sm-9 col-md-8 word-text">E 201</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Official Class</Label>
                                                <span className="col-sm-9 col-md-8 word-text">E201</span>
                                        </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Address</Label>
                                                <span className="col-sm-9 col-md-8 word-text">542 W. 27th Street, 4th Floor, New York, NY 10001</span>
                                        </FormGroup>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		) 
	}
}

export default ViewTeacherInfo;