/* global IMAGE_PATH */
import React, {Component} from 'react';
import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {DropdownWithoutActiveProps} from '../partials/DropdownWithoutActiveProps';
import {fullName, limitTo} from '../../lib/Helper';
import './AddStudent.css';

class StudentListElements extends Component {
	render() {
		const {dropdownToggle, toggle, teacher} = this.props;
		return (
			<div className="light-white-bg teacher-box p-2 p-lg-3 relative">
			    <div className="box-settings pointer">
			        <DropdownWithoutActiveProps tag="li" nav="true" isOpen={dropdownToggle} toggle={toggle}>
			            <DropdownToggle tag="a">
			                <div className="user-image">
			                    <img src={ThreeDots} alt="" />
			                </div> 
			            </DropdownToggle>
			            <DropdownMenu>
			                <DropdownItem>Action</DropdownItem>
							<DropdownItem>Edit</DropdownItem>
							<DropdownItem>Delete</DropdownItem>
							<DropdownItem>Assign Subject</DropdownItem>
							<DropdownItem>Assign Class</DropdownItem>
							<DropdownItem>View Parent Info</DropdownItem>
			            </DropdownMenu>
			        </DropdownWithoutActiveProps>
			    </div>
			    <div className="teacher-group-box relative">
			        <div className="teacher-picture">
			            <img src={TeacherPic} alt=""/>
			        </div>
			        <div className="te-heading text-capitalize"><b>Andrew Kozak</b>, Male</div>
			        <div className="te-gen mb-1 text-capitalize">Class 602</div>
			        <div className="te-sub">Parent Contact:</div>
			        <div className="te-code text-capitalize">John Smith +3281813700</div>
			    </div>
			    <div className="d-flex justify-content-between mt-2">
			        <button type="button" className="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
			        <button type="button" className="btn btn-link view-btn pointer">View Detail</button>
			    </div>
			</div>
		);
	}
}
export default StudentListElements;