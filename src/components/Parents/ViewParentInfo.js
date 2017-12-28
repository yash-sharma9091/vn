/* global _ */
import React, {Component} from 'react';
import { FormGroup, Label } from 'reactstrap';
import LinkStudent from './LinkStudent';
import ProgressiveImage from '../Common/ProgressiveImage';
import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import {fullName, decorateLink} from '../../lib/Helper';
import {LinkContainer} from 'react-router-bootstrap';
import {studentDetail} from '../../lib/SiteLinks';

class ViewParentInfo extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            show: false
        }
    }
    toggle() {
        this.setState({show: !this.state.show});
    }
	render() {
        const {parent, refreshInfo} = this.props;
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
                                                    <li><a onClick={this.toggle}>Link Children</a></li>
                                                </ul>
                                            </div>
                                            <div className="profiles-mains">
                                                <ProgressiveImage className="teacher-profiles" backgroundSrc={parent.profile_image.path} />
                                                <div className="teacher-content-box">
                                                    <span className="text-capitalize">{parent.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="group-tehead">Personal Information</div>
                                <div className="p-3">
                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Gender</Label>
                                            {/*<span className="col-sm-9 col-md-8 word-text">{parent.relation ? _.capitalize(parent.relation.name): 'N/A'}</span>*/}
                                            <span className="col-sm-9 col-md-8 word-text">{_.capitalize(parent.gender)}</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Contact Number</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{parent.contact_telephoneno}</span>
                                        </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Parent Address</Label>
                                            <span className="col-sm-9 col-md-8 word-text">{parent.parent_address}</span>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <Label className="col-sm-3 col-md-4">Email Address</Label>
                                            <span className="col-sm-9 col-md-8 word-text email-text">{parent.email_address}</span>
                                         </FormGroup>
                                    </div>
                                </div>
                                {parent.student_data && parent.student_data.length > 0 && <div className="group-tehead">Children Information</div>}
                            </div>
                            
                            {parent.student_data && parent.student_data.length > 0 && (
                            <div className="pt-3 pb-3 pt-lg-3 pb-lg-3">
                                <div className="d-flex justify-content-left flex-wrap align-items-stretch align-content-around teachers-row">
                                    {parent.student_data.map((val, index) => (
                                        <div className="light-white-bg teacher-box p-2 p-lg-3 relative" key={index}>
                                            <div className="teacher-group-box relative">
                                                <ProgressiveImage className="teacher-picture" backgroundSrc={val.profile_image.path} />
                                                <div className="te-head text-capitalize">{fullName(val.first_name, val.last_name)}</div>
                                                <div className="te-gen mb-1 text-capitalize">N/A</div>
                                                <div className="te-sub">OSIS Number:</div>
                                                <div className="te-code text-capitalize">{val.osis_number}</div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <button type="button" className="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> <span>Message</span></button>
                                                <LinkContainer to={`${decorateLink(studentDetail)}/${val._id}`}>
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
                {show && <LinkStudent show={show} refreshInfo={refreshInfo} toggle={this.toggle} parent={parent}/>}
            </div>
		) 
	}
}

export default ViewParentInfo;