import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, maxLength200, maxLength400} from '../../lib/Validate';
import {Http} from '../../lib/Http';
import './Faq.css';
import Alert from '../Common/Alert';

class AskQuestion extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = { 
      		success: ''
      	}
	}
	
  	render() {
		const { error, handleSubmit, pristine, submitting} = this.props;
		const {success} = this.state;
    	return (
     		<div className="light-sm-bg">
					<div className="d-flex flex-row justify-content-center">
					 <Form onSubmit={handleSubmit(this.formSubmit)}  className="col-8 col-md-8 col-lg-5 col-xl-4">
						<h3 className="gradient-color text-center">Ask a Question/Make a Comment</h3>
						<p> </p>
						<Alert alertVisible={error||success} alertMsg={error||success} className={error ? "danger":"success"}/>
						<Field 
							component={FormField} type="textarea"
							name="question" label="Question/Comment" isRequired={true}
							id="goalStudentClass" labelClassName="gradient-color" rows="3" validate={[Required,maxLength400]} doValidate={true}/>

                        <Field 
							component={FormField} type="text"
							name="name" label="Name"
							id="Name" labelClassName="gradient-color" isRequired={true}
							placeholder="Enter your name" validate={[Required,maxLength200]} doValidate={true}/>
						
						<Field 
							component={FormField} type="email"
							name="email" label="Email"
							id="email" labelClassName="gradient-color" isRequired={true}
							placeholder="Enter your email address" validate={[Required,Email]} doValidate={true}/>

						<Field 
							component={FormField} type="text"
							name="phone" label="Phone"
							id="Phone" labelClassName="gradient-color" isRequired={true}
							placeholder="Enter your phone" validate={Required} doValidate={true}  maskInput={true} inputAddOn={true} inputAddOnText="+1"/>

												
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
		const {dispatch, reset} = this.props;
		return new Promise((resolve, reject) => {
			Http.post('contactus', values)
			.then(({data}) => {
				this.setState({success: data.message});
				dispatch(reset('contactForm'));
				setTimeout(() => this.setState({success: ''}), 5000);
			})
			.catch(({errors}) => reject(new SubmissionError({_error: errors.message})));
		});
	}
}

const _AskQuestionForm = reduxForm({
  	form: 'contactForm',
})(AskQuestion); 

export default _AskQuestionForm;