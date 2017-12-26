/* global _ */
import React from 'react';
import {Form, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field, SubmissionError,reduxForm, clearSubmitErrors } from 'redux-form';
import {Http} from '../../lib/Http';
import FormCombobox from '../Common/FormCombobox';
import FormDropdown from '../Common/FormDropdown';
import {Required} from '../../lib/Validate';
import FormSubmit from '../Common/FormSubmit';
import Alert from '../Common/Alert';
import {connect} from 'react-redux';
class LinkParent extends React.Component {
  	constructor(props) {
    	super(props);
    	this.onSearch = this.onSearch.bind(this);
    	this.formSubmit = this.formSubmit.bind(this);
    	this.ListItem = this.ListItem.bind(this);
    	this.state = {
    		success:'',
    		data: [],
    		isLoading: false
    	}
  	}
  	ListItem (data ) {
  		const {item} = data;
	  	return (
	  		<span>
	    		<strong>{item.name}</strong>
	    		{" " + item.email_address}
	  		</span>
		)
  	}
  	onSearch(query) {
  		
  		if( query && !_.isObject(query)) {
  			this.setState({isLoading: true});
  			Http.get(`get_parent_listing?email_address=${query}`)
  			.then(({data}) => this.setState({data, isLoading: false}))
  			.catch(({errors}) => { throw new SubmissionError({_error: errors.message}) });
  		}
  	}
  	formSubmit(value) {
  		
  		if( !value ) return;
  		if( !value.parent ) {
  			throw new SubmissionError({_error: 'parent is required'});
  		}
  		
  		const {student, user, dispatch, reset, toggle, refreshInfo} = this.props;
  		
  		const request = { 
  			student_id: student._id, 
  			parent_id: value.parent ? value.parent._id : null,
  			school_id: user._id,
  			relation: value.relation
  		}
  		return new Promise((resolve, reject) => {
  			Http.post('link_parent_student', request)
  			.then(({data}) => {
  				this.setState({success: data.message})
  				setTimeout(() => {
  					this.setState({success: ''});
  					toggle();
  					refreshInfo();
  				}, 5000);
  				dispatch(reset('LinkParentForm'));
  				resolve();
  			})
  			.catch(({errors}) => {
  				reject(new SubmissionError({_error: errors.message}))
  				setTimeout(() => dispatch(clearSubmitErrors("LinkParentForm")), 5000);
  			})
  		});  		
  	}
  	render() {
  		const {show, toggle, handleSubmit, error, pristine, submitting, masterdata} = this.props;
  		const {data, isLoading, success} = this.state;
  		const {student_relation} = masterdata;
    	return (
	      	<div>
	        	<Modal isOpen={show} toggle={toggle} >
	          		<ModalHeader toggle={toggle}>Link parent</ModalHeader>
	          		<Form onSubmit={handleSubmit(this.formSubmit)}>
	          			
		          		<ModalBody>
		          			<Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>
		          			<Field 
		          			    component={FormCombobox} 
		          			    name="parent" 
		          			    onSearch={this.onSearch}
		          			    data={data}
		          			    busy={isLoading}
		          			    ListItem={this.ListItem}
		          			    textField="email_address"
		          			    label="Select Parent"
		            		    valueField="_id"
		            		    validate={[Required]} doValidate={true}
		          			    placeholder="Type email address to search ...."/>
		          			<Field 
                                component={FormDropdown} name="relation" label="Select Relation"
                                data={student_relation} placeholder="Select relation"
                                valueField={"_id"} textField={"name"} validate={[Required]} doValidate={true}/>    
		          		</ModalBody>
		          		<ModalFooter>
		            		<FormSubmit 
                                error={error} invalid={pristine}
                                submitting={submitting} className="btn-primary ml-1"
                                buttonSaveLoading="Processing..." buttonSave="Save"/>{' '}
		            		<Button color="secondary" onClick={toggle}>Cancel</Button>
		          		</ModalFooter>
		          	</Form>	
	        	</Modal>
	      	</div>
    	);
  	}
}
let LinkParentForm = reduxForm({
    form: 'LinkParentForm'
})(LinkParent);
const mapStateToProps = (state) => ({
	user: state.auth.user,
	masterdata: state.masterdb
})
export default connect(mapStateToProps)(LinkParentForm);