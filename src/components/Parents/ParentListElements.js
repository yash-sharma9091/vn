import React, {Component} from 'react';
//import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {DropdownWithoutActiveProps} from '../partials/DropdownWithoutActiveProps';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import {editTeacher, teacherDetail} from '../../lib/SiteLinks';
import {LinkContainer} from 'react-router-bootstrap';
import DeleteParent from '../Common/DeleteModal';
import ProgressiveImage from '../Common/ProgressiveImage';
import {Http} from '../../lib/Http';

class ParentListElements extends Component {
	constructor() {
		super();
		this.toggle = this.toggle.bind(this);
		this.deleteParent = this.deleteParent.bind(this);
		this.state = {
			show: false,
			_parent: {}
		}
	}
	toggle() {
		this.setState({show: !this.state.show});
	}
	onDelete(_parent) {
		this.toggle();
		this.setState({_parent});
	}
	deleteParent() {
		return Http.delete(`delete_parent?_id=${this.state._parent._id}`);
	}
	render() {
		const {dropdownToggle, toggle, parent, dataIndex, refreshList} = this.props;
		const {show, _parent} = this.state;
		
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
				            <DropdownMenu>
				            	<LinkContainer to={`${decorateLink(editTeacher)}/${parent._id}`}>
				                	<DropdownItem>Edit</DropdownItem>
				                </LinkContainer>	
				                <DropdownItem onClick={() => this.onDelete(parent)}>Delete</DropdownItem>
				                <DropdownItem>Assign Subject</DropdownItem>
				                <DropdownItem>View Lesson Plans</DropdownItem>
				            </DropdownMenu>
				        </DropdownWithoutActiveProps>
				    </div>
				    <div className="teacher-group-box relative">
				    	<ProgressiveImage className="teacher-picture" backgroundSrc={parent.profile_image.path} />
				        
				        <div className="te-head text-capitalize">{limitTo(parent.name,50)}</div>
				        <div className="te-gen mb-1 text-capitalize">{parent.relation.name}</div>
				        <div className="te-sub">Parent Contact:</div>
				        <div className="te-code text-capitalize">{parent.contact_telephoneno}</div>
				    </div>
				    <div className="d-flex justify-content-between mt-2">
				        <button type="button" className="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> <span>Message</span></button>
				        <LinkContainer to={`${decorateLink(teacherDetail)}/${parent._id}`}>
				        	<button type="button" className="btn btn-link view-btn pointer">View Detail</button>
				        </LinkContainer>	
				    </div>
				</div>
				{show && <DeleteParent show={show} refreshList={refreshList} toggle={this.toggle} onDelete={this.deleteParent} user={_parent}/>}
			</div>	
		);
	}
}
export default ParentListElements;