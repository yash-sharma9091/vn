/* global IMAGE_PATH, _ */
import React, {Component} from 'react';
import {fullName, limitTo} from '../../lib/Helper';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
class DeleteModal extends Component {
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
		const {user, refreshList, toggle, onDelete, redirect} = this.props;
		this.setState({isDeleting: true});
		onDelete(user._id)
		.then(({data}) => {
			this.setState({success: data.message, isDeleting: false, isDeleted: true});
			setTimeout(() => {
				this.setState({success: ''});
				if( _.isFunction(toggle) ) {
    				toggle();
				}
				if( _.isFunction(refreshList) ) {
    				refreshList();
				}
				if( _.isFunction(redirect) ) {
    				redirect();
				}
				
			}, 2000);
		})
		.catch(({errors}) => this.setState({error: errors.message, isDeleting: false}));
	}
	render() {
		const {show, toggle, user} = this.props;
		const {isDeleting, error, success, isDeleted} = this.state;
		let profilImage = `${IMAGE_PATH}/${user.profile_image.path}`;
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
							<div className="media-body">
								{ user.role === 'parent' 
									? (<h5 className="mt-0">{limitTo(user.name,50)}</h5>)
									: (<h5 className="mt-0">{limitTo(fullName(user.first_name, user.last_name),50)}</h5>)
								}
							</div>
						</div>
					</div>
				</ModalBody>
				<ModalFooter className="imports-button">
					<Button color="primary" disabled={isDeleting || isDeleted} onClick={this.delete}>{isDeleting ? 'Processing ...':'Yes'}</Button>{' '}
					<Button color="info" onClick={toggle}>No</Button>
				</ModalFooter>
			</Modal>
		)
	}
}

export default DeleteModal;