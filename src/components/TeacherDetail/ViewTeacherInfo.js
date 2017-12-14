/* global IMAGE_PATH */
import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './TeacherDetail.css';
import {fullName} from '../../lib/Helper';

class ViewTeacherInfo extends Component {
	render() {
        const {teacher} = this.props;
        const style = {
            backgroundImage: 'url(' + (IMAGE_PATH + '/' + teacher.profile_image.path) + ')'
        }
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="teacher-profile-boxes">
                        <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <div className="col-sm-12">
                                            <div className="profiles-mains">
                                                <div className="teacher-profiles" style={style}></div>
                                                <span>{fullName(teacher.first_name, teacher.last_name)}</span>
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
                                                <Label className="col-sm-3 col-md-4">Gender</Label>
                                                <span className="col-sm-9 col-md-8 word-text text-capitalize">{teacher.gender}</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Official Class</Label>
                                                {/*<span className="col-sm-9 col-md-8 word-text">E204</span>*/}
                                                <span className="col-sm-9 col-md-8 word-text">N/A</span>
                                         </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Grade</Label>
                                                {/*<span className="col-sm-9 col-md-8 word-text">E 201</span>*/}
                                                <span className="col-sm-9 col-md-8 word-text">N/A</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Subjects</Label>
                                                <span className="col-sm-9 col-md-8 word-text">N/A</span>
                                                {/*<span className="col-sm-9 col-md-8">
                                                    <ul className="code-list">
                                                        <li>N/A</li>
                                                        <li>M 201</li>
                                                        <li>S 501</li>
                                                    </ul>
                                                </span>*/}
                                        </FormGroup>
                                    </div>
                                </Form>
                            </div>

                            <div className="group-tehead"> Contact Information</div>
                            <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Teacher Address</Label>
                                                <span className="col-sm-9 col-md-8 word-text">{teacher.teacher_address}</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                                <Label className="col-sm-3 col-md-4">Email</Label>
                                                <span className="col-sm-9 col-md-8 word-text email-text">{teacher.email_address}</span>
                                         </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6">
                                        </div>
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Contact Number</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{teacher.contact_telephoneno}</span>
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