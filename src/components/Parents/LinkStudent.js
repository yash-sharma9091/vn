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
import {fullName} from '../../lib/Helper';
class LinkStudent extends React.Component {
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
	    		<strong>{fullName(item.first_name, item.last_name)}</strong>
	    		{" " + item.osis_number}
	  		</span>
		)
  	}
  	onSearch(query) {
  		
  		if( query && !_.isObject(query)) {
  			this.setState({isLoading: true});
  			Http.get(`get_student_listing?osis_number=${query}`)
  			.then(({data}) => this.setState({data, isLoading: false}))
  			.catch(({errors}) => { throw new SubmissionError({_error: errors.message}) });
  		}
  	}
  	formSubmit(value) {
  		if( !value ) return;
  		if( !value.student ) {
  			throw new SubmissionError({_error: 'student is required'});
  		}
  		const {parent, user, dispatch, reset, refreshInfo, toggle} = this.props;
  		const request = { 
  			parent_id: parent._id, 
  			student_id: value.student ? value.student._id : null,
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
  				dispatch(reset('LinkStudentForm'));
  				resolve();
  			})
  			.catch(({errors}) => {
  				reject(new SubmissionError({_error: errors.message}))
  				setTimeout(() => dispatch(clearSubmitErrors("LinkStudentForm")), 5000);
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
	          		<ModalHeader toggle={toggle}>Link student</ModalHeader>
	          		<Form onSubmit={handleSubmit(this.formSubmit)}>
	          			
		          		<ModalBody>
		          			<Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>
		          			<Field 
		          			    component={FormCombobox} 
		          			    name="student" 
		          			    onSearch={this.onSearch}
		          			    data={data}
		          			    busy={isLoading}
		          			    ListItem={this.ListItem}
		          			    textField="osis_number"
		          			    label="Select Student"
		            		    valueField="_id"
		            		    validate={[Required]} doValidate={true}
		          			    placeholder="Type osis number to search ...."/>
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
let LinkStudentForm = reduxForm({
    form: 'LinkStudentForm'
})(LinkStudent);
const mapStateToProps = (state) => ({
	user: state.auth.user,
	masterdata: state.masterdb
})
export default connect(mapStateToProps)(LinkStudentForm);