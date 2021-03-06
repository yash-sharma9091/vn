
import React, {Component} from 'react';
import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {DropdownWithoutActiveProps} from '../partials/DropdownWithoutActiveProps';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import './AddStudent.css';
import {editStudent, studentDetail} from '../../lib/SiteLinks';
import {LinkContainer} from 'react-router-bootstrap';
import ProgressiveImage from '../Common/ProgressiveImage';
import DeleteStudent from '../Common/DeleteModal';
import {Http} from '../../lib/Http';

class StudentListElements extends Component {
	constructor() {
		super();
		this.toggle = this.toggle.bind(this);
		this.deleteStudent = this.deleteStudent.bind(this);
		this.state = {
			show: false,
			_student: {}
		}
	}
	toggle() {
		this.setState({show: !this.state.show});
	}
	onDelete(_student) {
		this.toggle();
		this.setState({_student});
	}
	deleteStudent() {
		return Http.delete(`delete_student?_id=${this.state._student._id}`);
	}
	render() {
		const {dropdownToggle, toggle, student, dataIndex, refreshList} = this.props;
		
		const {show, _student} = this.state;
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
				            	<LinkContainer to={`${decorateLink(editStudent)}/${student._id}`}>
				                	<DropdownItem>Edit</DropdownItem>
				                </LinkContainer>	
				                <DropdownItem onClick={() => this.onDelete(student)}>Delete</DropdownItem>
				                <DropdownItem>Assign Subject</DropdownItem>
				                <DropdownItem>View Lesson Plans</DropdownItem>
				            </DropdownMenu>
				        </DropdownWithoutActiveProps>
				    </div>
				    <div className="teacher-group-box relative">
				    	<ProgressiveImage className="teacher-picture" backgroundSrc={student.profile_image.path} />
				        {/*<div className="teacher-picture"  style={imageStyle}> </div>*/}
				        <div className="te-heading text-capitalize"><b>{limitTo(fullName(student.first_name, student.last_name),50)}</b>, {student.gender}</div>
				        <div className="te-gen mb-1 text-capitalize">N/A</div>
				        <div className="te-sub">OSIS Number:</div>
				        {/*<div className="te-code text-capitalize">{student.parent_name} {student.contact_telephoneno ? `+1${student.contact_telephoneno}` : ''}</div>*/}
				        <div className="te-code text-capitalize">{student.osis_number}</div>
				    </div>
				    <div className="d-flex justify-content-between mt-2">
				        <button type="button" className="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
				        <LinkContainer to={`${decorateLink(studentDetail)}/${student._id}`}>
				        	<button type="button" className="btn btn-link view-btn pointer">View Detail</button>
				        </LinkContainer>	
				    </div>
				</div>
				{show && <DeleteStudent show={show} refreshList={refreshList} toggle={this.toggle} onDelete={this.deleteStudent} user={_student}/>}
			</div>
		);
	}
}
export default StudentListElements;