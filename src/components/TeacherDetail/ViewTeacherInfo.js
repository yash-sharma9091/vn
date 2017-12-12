import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './TeacherDetail.css';
import {fullName} from '../../lib/Helper';

class ViewTeacherInfo extends Component {
	render() {
        const {teacher} = this.props;
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
                                                <div className="teacher-profiles"></div>
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
                                            <div className="form-row">
                                                <Label className="col-sm-3">Gender</Label>
                                                <span className="col-sm-9 word-text">{teacher.gender}</span>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Official Class</Label>
                                                <span className="col-sm-9 word-text">E204</span>
                                            </div>
                                         </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Grade</Label>
                                                <span className="col-sm-9 word-text">E 201</span>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Subjects</Label>
                                                <span className="col-sm-9">
                                                    <ul className="code-list">
                                                        <li>E 401</li>
                                                        <li>M 201</li>
                                                        <li>S 501</li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </FormGroup>
                                    </div>
                                </Form>
                            </div>

                            <div className="group-tehead"> Contact Information</div>
                            <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Address</Label>
                                                <span className="col-sm-9 word-text">{teacher.teacher_address}</span>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Email</Label>
                                                <span className="col-sm-9 word-text email-text">{teacher.email_address}</span>
                                            </div>
                                            <div className="form-row">
                                                <Label className="col-sm-3">Phone</Label>
                                                <span className="col-sm-9 word-text">{teacher.contact_telephoneno}</span>
                                            </div>
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