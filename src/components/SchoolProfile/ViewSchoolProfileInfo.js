/* global IMAGE_PATH */
import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './SchoolProfile.css';
import {fullName} from '../../lib/Helper';
import ProgressiveImage from '../Common/ProgressiveImage';

class ViewTeacherInfo extends Component {
	render() {
        const {school} = this.props;
        console.log(school);
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
                                            <div className="profiles-mains">
                                                <ProgressiveImage className="teacher-profiles" backgroundSrc={school.school_logo.path} />
                                                <div className="teacher-content-box">
                                                    <span>{school.school_name}</span>
                                                    <text>{school.uan}</text>
                                                </div>
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
                                            <Label className="col-sm-3 col-md-4">Type of School</Label>
                                            <span className="col-sm-9 col-md-8 word-text text-capitalize">{school.school_type ? school.school_type.name : 'NA'}</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">School Levels</Label>
                                            <span className="col-sm-9 col-md-8 word-text">Primary</span>
                                        </FormGroup>
                                        
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Total No. of Students</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{school.no_of_students}</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">School Telephone Number</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{school.contact_telephoneno}</span>
                                         </FormGroup>
                                        
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-12">
                                            <Label className="col-sm-3 col-md-4">School Address</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{school.school_address}</span>
                                        </FormGroup>
                                        {/*<FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">School Code</Label>
                                            <span className="col-sm-9 col-md-8 word-text">ES505</span>
                                            <span className="col-sm-9 col-md-8">
                                                <ul className="code-list">
                                                    <li>N/A</li>
                                                    <li>M 201</li>
                                                    <li>S 501</li>
                                                </ul>
                                            </span>
                                        </FormGroup>*/}
                                    </div>
                                </Form>
                            </div>

                            <div className="group-tehead"> Contact Information</div>
                            <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Contact Person</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{school.contact_name}</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Email Address</Label>
                                            <span className="col-sm-9 col-md-8 word-text email-text">{school.email_address}</span>
                                         </FormGroup>
                                    </div>

                                    <div className="form-row">
                                         <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Contact Number</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{school.contact_telephoneno}</span>
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