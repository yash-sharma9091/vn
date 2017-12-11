/* global IMAGE_PATH */
import React, {Component} from 'react';
//import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {DropdownWithoutActiveProps} from '../partials/DropdownWithoutActiveProps';
import {fullName, limitTo} from '../../lib/Helper';

class TeachersListElements extends Component {
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
			                <DropdownItem header>Header</DropdownItem>
			                <DropdownItem>Action</DropdownItem>
			                <DropdownItem>Another Action</DropdownItem>
			                <DropdownItem divider />
			                <DropdownItem >Logout</DropdownItem>
			            </DropdownMenu>
			        </DropdownWithoutActiveProps>
			    </div>
			    <div className="teacher-group-box relative">
			        <div className="teacher-picture">
			            <img src={`${IMAGE_PATH}/${teacher.profile_image.path}`} alt={teacher.first_name} />
			        </div>
			        <div className="te-head text-capitalize">{limitTo(fullName(teacher.first_name, teacher.last_name),50)}</div>
			        <div className="te-gen mb-1 text-capitalize">{teacher.gender}</div>
			        <div className="te-sub">Subject &amp; Class</div>
			        <div className="te-code text-capitalize">E 401, M 201, S 501...</div>
			    </div>
			    <div className="d-flex justify-content-between mt-2">
			        <button type="button" className="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
			        <button type="button" className="btn btn-link view-btn pointer">View Detail</button>
			    </div>
			</div>
		);
	}
}
export default TeachersListElements;