/* global IMAGE_PATH */
import React, {Component} from 'react';
import {fullName, limitTo} from '../../lib/Helper';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import confImg from '../../assets/images/conf-img.png';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
class DeleteTeacher extends Component {
	constructor() {
		super();
		this.delete = this.delete.bind(this);
		this.state = {
			isDeleting: false,
			isDeleted: false,
			success:'',
			error:''
		}
	}
	delete() {
		const {teacher, refreshList, toggle} = this.props;
		this.setState({isDeleting: true});
		Http.delete(`delete_teacher?_id=${teacher._id}`)
		.then(({data}) => {
			this.setState({success: data.message, isDeleting: false, isDeleted: true});
			setTimeout(() => {
				this.setState({success: ''});
				toggle();
				refreshList();		
			}, 2000);
		})
		.catch(({errors}) => this.setState({error: errors.message, isDeleting: false}));
	}
	render() {
		const {show, toggle, teacher} = this.props;
		const {isDeleting, error, success, isDeleted} = this.state;
		let profilImage = `${IMAGE_PATH}/${teacher.profile_image.path}`;
		const imageStyle = {
			backgroundImage: 'url(' + ( profilImage ) + ')',
			backgroundRepeat  : 'no-repeat',
       		backgroundPosition: 'center',
		}
		
		return (
			<Modal isOpen={show} toggle={toggle} className="confirmation-modal">
				<ModalHeader toggle={toggle}>Confirmation </ModalHeader>
			    <ModalBody>
			    	<Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger alert-box":"success"}/>
					<div className={success ? 'd-none':''}>
						<h3>Are you sure to want to delete ?</h3>
						<div className="media">
							<div className="align-self-center mr-3" style={imageStyle}></div>
							{/* <img className="" src={`${IMAGE_PATH}/${teacher.profile_image.path}`} alt="Generic placeholder image" /> */}
							<div className="media-body">
								<h5 className="mt-0">{limitTo(fullName(teacher.first_name, teacher.last_name),50)}</h5>
							</div>
						</div>
					</div>
					{/*<div className="te-head text-capitalize">{limitTo(fullName(teacher.first_name, teacher.last_name),50)}</div> */}
				</ModalBody>
				<ModalFooter className="imports-button">
					<Button color="primary" disabled={isDeleting || isDeleted} onClick={this.delete}>{isDeleting ? 'Processing ...':'Yes'}</Button>{' '}
					<Button color="info" onClick={toggle}>No</Button>
				</ModalFooter>
			</Modal>
		)
	}
}

export default DeleteTeacher;