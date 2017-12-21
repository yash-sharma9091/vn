import React from 'react';
import {Form, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Http} from '../../lib/Http';
import FormMultiSelect from '../Common/FormMultiSelect';
import FormSubmit from '../Common/FormSubmit';
import Alert from '../Common/Alert';
class LinkStudent extends React.Component {
  	constructor(props) {
    	super(props);
    	this.onSearch = this.onSearch.bind(this);
    	this.formSubmit = this.formSubmit.bind(this);
    	this.state = {
    		success:'',
    		data: [],
    		isLoading: false
    	}
  	}
  	onSearch(val) {
  		if( val ) {
  			this.setState({isLoading: true});
  			Http.get(`get_student_listing?osis_number=${val}`)
  			.then(({data}) => this.setState({data, isLoading: false}))
  			.catch(({errors}) => { throw new SubmissionError({_error: errors.message}) });
  		}
  	}
  	formSubmit(value) {
  		console.log(value);
  		const {parent} = this.props;
  		return new Promise((resolve, reject) => {
  			Http.post('link_student_to_parent', { parent_id: parent._id, child_id: value.link_student })
  			.then(({data}) => console.log(data))
  			.catch(({errors}) => reject(new SubmissionError({_error: errors.message})))
  		});  		
  	}
  	render() {
  		const {show, toggle, handleSubmit, error, pristine, submitting} = this.props;
  		const {data, isLoading, success} = this.state;
  		
    	return (
	      	<div>
	        	<Modal isOpen={show} toggle={toggle} >
	          		<ModalHeader toggle={toggle}>Link children</ModalHeader>
	          		<Form onSubmit={handleSubmit(this.formSubmit)}>
	          			
		          		<ModalBody>
		          			<Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>
		          			<Field 
		          			    component={FormMultiSelect} 
		          			    name="link_student" 
		          			    onSearch={this.onSearch}
		          			    data={data}
		          			    busy={isLoading}
		          			    textField="osis_number"
		            		    valueField="_id"
		          			    placeholder="Enter first name"/>
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
    form: 'AddStudentForm'
})(LinkStudent);
export default LinkStudentForm;