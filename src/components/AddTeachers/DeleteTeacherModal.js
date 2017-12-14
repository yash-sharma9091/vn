/* global IMAGE_PATH */
import React, {Component} from 'react';
import {fullName, limitTo} from '../../lib/Helper';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import confImg from '../../assets/images/conf-img.png';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
class DeleteTeacher extends Component {
	constructor() {
		super();
		this.delete = this.delete.bind(this);
		this.state = {
			isDeleting: false,
			success:'',
			error:''
		}
	}
	delete() {
		const {teacher, refreshTeacherList, toggle} = this.props;
		this.setState({isDeleting: true});
		Http.delete(`delete_teacher?_id=${teacher._id}`)
		.then(({data}) => {
			this.setState({success: data.message, isDeleting: false});
			setTimeout(() => {
				this.setState({success: ''});
				toggle();
				refreshTeacherList();
			}, 3000);
		})
		.catch(({errors}) => this.setState({error: errors.message, isDeleting: false}));
	}
	render() {
		const {show, toggle, className, teacher} = this.props;
		const {isDeleting, error, success} = this.state;
		return (
			<Modal isOpen={show} toggle={toggle} className={className} className="confirmation-modal">
				<ModalHeader toggle={toggle}><h2>Confirmation</h2> </ModalHeader>
			    <ModalBody>
			    	<Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger alert-box":"success"}/>
					<h3>Are you sure to want to delete ?</h3>
					<div className="media">
						<img class="align-self-center mr-3" src={confImg} alt="Generic placeholder image" />
						<div className="media-body">
							<h5 class="mt-0">Antoine Langlais</h5>
						</div>
					</div>
					{/* <div className="">
					    <img src={`${IMAGE_PATH}/${teacher.profile_image.path}`} alt={teacher.first_name} />
					</div>
					<div className="te-head text-capitalize">{limitTo(fullName(teacher.first_name, teacher.last_name),50)}</div> */}
				</ModalBody>
				<ModalFooter className="imports-button">
					<Button color="info" disabled={isDeleting} onClick={this.delete}>{isDeleting ? 'Processing ...':'No'}</Button>{' '}
					<Button color="primary" onClick={toggle}>Yes</Button>
				</ModalFooter>
			</Modal>
		)
	}
}

export default DeleteTeacher;