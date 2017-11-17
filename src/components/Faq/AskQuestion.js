import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number} from '../../lib/Validate';
import './Faq.css';

class AskQuestion extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = { 
      		success: ''
      	}
	}
	
  	render() {
		const { error, handleSubmit, pristine, submitting, submitSucceeded} = this.props;
    	return (
     		<div className="light-sm-bg">
					<div className="d-flex flex-row justify-content-center">
					 <Form onSubmit={handleSubmit(this.formSubmit)}  className="col-4">
						<h3 className="gradient-color text-center">Ask A Question</h3>
						<p className="text-center light-gray">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
						<Field 
							component={FormField} type="text"
							name="Questions" label="Questions"
							id="Questions" labelClassName="gradient-color"
							placeholder="Enter your questions" validate={Required} doValidate={true}/>

                        <Field 
							component={FormField} type="text"
							name="Name" label="Name"
							id="Name" labelClassName="gradient-color"
							placeholder="Enter your name" validate={Required} doValidate={true}/>
						
						<Field 
							component={FormField} type="text"
							name="email" label="Email"
							id="email" labelClassName="gradient-color"
							placeholder="Enter email address" validate={Required} doValidate={true}/>

						<Field 
							component={FormField} type="text"
							name="Phone" label="Phone"
							id="Phone" labelClassName="gradient-color"
							placeholder="+91" validate={Required} doValidate={true}/>
						
						<FormSubmit 
							error={error} invalid={pristine}
							submitting={submitting} className="btn-block btn-primary"
							buttonSaveLoading="Processing..." buttonSave="Send It !"/>

					</Form>
				   </div>
			</div>
		);
	  }
	  formSubmit(values) {
		console.log(values);
	  }
}

const _AskQuestionForm = reduxForm({
  	form: 'ChangePassForm',
})(AskQuestion); 

export default _AskQuestionForm;