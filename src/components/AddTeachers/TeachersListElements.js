import React, {Component} from 'react';
//import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {DropdownWithoutActiveProps} from '../partials/DropdownWithoutActiveProps';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import {editTeacher, teacherDetail} from '../../lib/SiteLinks';
import {LinkContainer} from 'react-router-bootstrap';
import DeleteTeacher from '../Common/DeleteModal';
import ProgressiveImage from '../Common/ProgressiveImage';
import {Http} from '../../lib/Http';

class TeachersListElements extends Component {
	constructor() {
		super();
		this.toggle = this.toggle.bind(this);
		this.deleteTeacher = this.deleteTeacher.bind(this);
		this.state = {
			show: false,
			_teacher: {}
		}
	}
	toggle() {
		this.setState({show: !this.state.show});
	}
	onDelete(_teacher) {
		this.toggle();
		this.setState({_teacher});
	}
	deleteTeacher() {
		return Http.delete(`delete_teacher?_id=${this.state._teacher._id}`);
	}
	render() {
		const {dropdownToggle, toggle, teacher, dataIndex, refreshList} = this.props;
		const {show, _teacher} = this.state;
		
		return (
			<div>
				<div className="light-white-bg teacher-box p-2 p-lg-3 relative">
				    <div className="box-settings pointer">
				        <DropdownWithoutActiveProps tag="li" nav="true" isOpen={dropdownToggle} toggle={toggle}>
				            <DropdownToggle tag="a">
				                <div className="user-image">
				                    <img src={ThreeDots} alt="action" data-index={dataIndex} />
				                </div> 
				            </DropdownToggle>
				            <DropdownMenu right>
				            	<LinkContainer to={`${decorateLink(editTeacher)}/${teacher._id}`}>
				                	<DropdownItem>Edit</DropdownItem>
				                </LinkContainer>	
				                <DropdownItem onClick={() => this.onDelete(teacher)}>Delete</DropdownItem>
				                <DropdownItem>Assign Subject</DropdownItem>
				                <DropdownItem>View Lesson Plans</DropdownItem>
				            </DropdownMenu>
				        </DropdownWithoutActiveProps>
				    </div>
				    <div className="teacher-group-box relative">
				    	<ProgressiveImage className="teacher-picture" backgroundSrc={teacher.profile_image.path} />
				        {/*<div className="teacher-picture" style={imageStyle}>
				            <img src={`${IMAGE_PATH}/${teacher.profile_image.path}`} alt={teacher.first_name} />
				        </div>*/}
				        <div className="te-head text-capitalize">{limitTo(fullName(teacher.first_name, teacher.last_name),50)}</div>
				        <div className="te-gen mb-1 text-capitalize">{teacher.gender}</div>
				        <div className="te-sub">Subject &amp; Class</div>
				        {/*<div className="te-code text-capitalize">E 401, M 201, S 501...</div>*/}
				        <div className="te-code text-capitalize">N/A</div>
				    </div>
				    <div className="d-flex justify-content-between mt-2">
				        <button type="button" className="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> <span>Message</span></button>
				        <LinkContainer to={`${decorateLink(teacherDetail)}/${teacher._id}`}>
				        	<button type="button" className="btn btn-link view-btn pointer">View Detail</button>
				        </LinkContainer>	
				    </div>
				</div>
				{show && <DeleteTeacher show={show} refreshList={refreshList} toggle={this.toggle} onDelete={this.deleteTeacher} user={_teacher}/>}
			</div>	
		);
	}
}
export default TeachersListElements;