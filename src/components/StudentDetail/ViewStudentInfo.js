/* global _, moment */
import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './StudentDetail.css';
import {fullName, formatDate, decorateLink} from '../../lib/Helper';
import MessageIcon from '../../assets/images/svg/envelope-gray.svg';
import ProgressiveImage from '../Common/ProgressiveImage';
import DeleteStudent from '../Common/DeleteModal';
import {Http} from '../../lib/Http';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import LinkParent from './LinkParent';
import {studentListing, parentDetail} from '../../lib/SiteLinks';
import {LinkContainer} from 'react-router-bootstrap';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
class ViewStudentInfo extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.redirect = this.redirect.bind(this);
        this.state = {
            show: false
        }
    }
    deleteStudent() {
        const {student} = this.props;
        return Http.delete(`delete_student?_id=${student._id}`);
    }
    toggle() {
        this.setState({show: !this.state.show});
    }
    redirect() {
        const {dispatch} = this.props;
        dispatch(push(studentListing));
    }
	render() {
        const {student, refreshInfo} = this.props;
        const {show} = this.state;
       
		return (
            <div>
                <div className="left-group">
                    <div className="left-group-content">
                        <div className="p-3 p-lg-3">
                            <div className="teacher-profile-boxes">
                                <div className="p-3">
                                    <div className="form-row">
                                        <div className="col-sm-12">
                                            <div className="activity-action-list">
                                                <ul>
                                                    {/*<li><a onClick={this.toggle}>Delete</a></li>*/}
                                                    <li><a>Assign Subject</a></li>
                                                    <li><a>Assign Class</a></li>
                                                    <li><a>View Parent Info</a></li>
                                                    <li><a onClick={this.toggle}>Link Parent</a></li>
                                                </ul>
                                            </div>
                                            <div className="profiles-mains">
                                                {/*<div className="teacher-profiles" ></div>*/}
                                                <ProgressiveImage className="teacher-profiles" backgroundSrc={student.profile_image.path} />
                                                <div className="teacher-content-box">
                                                    <span className="text-capitalize">{fullName(student.first_name, student.last_name)}</span>
                                                </div>    
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
                                                <span className="col-sm-9 col-md-8 word-text">N/A</span>
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
                                            <Label className="col-sm-3 col-md-4">OSIS Number</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{student.osis_number}</span>
                                        </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Class</Label>
                                            <span className="col-sm-9 col-md-8 word-text">-</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Additional Health Info</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{student.additional_health_info ? student.additional_health_info.name : 'N/A'}</span>
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="group-tehead"> Contact Information</div>
                                <div className="p-3">
                                    {/*<div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Name</Label>
                                            <span className="col-sm-9 col-md-8 email-text">{student.parent_name}</span>
                                        </FormGroup>
                                        
                                    </div>*/}

                                    <div className="form-row">
                                        {/*<FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Relation</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{student.parent_relation}</span>
                                        </FormGroup>*/}
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Student Email Address</Label>
                                            <span className="col-sm-9 col-md-8 email-text">{student.email_address || 'N/A'}</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Contact Number</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{student.contact_telephoneno || 'N/A'}</span>
                                        </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Student Address</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{student.student_address}</span>
                                        </FormGroup>
                                    </div>
                                </div>
                                {student.parent_data && student.parent_data.length > 0 && <div className="group-tehead">Parent Information</div>}
                            </div>
                            {student.parent_data && student.parent_data.length > 0 && (
                            <div className="pt-3 pb-3 pt-lg-3 pb-lg-3">
                                <div className="d-flex justify-content-left flex-wrap align-items-stretch align-content-around teachers-row">
                                    {student.parent_data.map((val, index) => (
                                        <div className="light-white-bg teacher-box p-2 p-lg-3 relative" key={index}>
                                            <div className="teacher-group-box relative">
                                                <ProgressiveImage className="teacher-picture" backgroundSrc={val.profile_image.path} />
                                                <div className="te-head text-capitalize">{val.name}</div>
                                                <div className="te-gen mb-1 text-capitalize">{val.gender}</div>
                                                <div className="te-sub">Contact Number:</div>
                                                <div className="te-code text-capitalize">{val.contact_telephoneno}</div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <button type="button" className="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> <span>Message</span></button>
                                                <LinkContainer to={`${decorateLink(parentDetail)}/${val._id}`}>
                                                    <button type="button" className="btn btn-link view-btn pointer">View Detail</button>       
                                                </LinkContainer>    
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            )}
                        </div>
                    </div>

                </div>
                {/*show && <DeleteStudent show={show} toggle={this.toggle} redirect={this.redirect} onDelete={this.deleteStudent} user={student}/>*/}
                {show && <LinkParent show={show} refreshInfo={refreshInfo} toggle={this.toggle} student={student}/>}

            </div>
		) 
	}
}

export default connect()(ViewStudentInfo);