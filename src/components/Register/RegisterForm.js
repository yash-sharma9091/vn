/* global _ */
import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number} from '../../lib/Validate';
import {Http} from '../../lib/Http';
import './Register.css';

class RegisterForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
    }

  	render() {
  		const { error, handleSubmit, pristine, submitting} = this.props;
  		const options = [
			{key: 'public', value: 'Public'},
			{key: 'private', value: 'Private'},
			{key: 'charter', value: 'Charter'},
			{key: 'other', value: 'Other'}
		], levels = [
			{key: 'k5', value: 'K5'},
			{key: 'k6', value: 'K6'},
			{key: 'k8', value: 'K8'},
			{key: 'k9', value: 'K9'},
			{key: 'k12', value: 'K12'}
		];
    	return (
     		<div className="App">
        		<div className="light-bg padding-50">
                    <div className="container">
                      	<div className="row justify-content-center">
                      		<Form onSubmit={handleSubmit(this.formSubmit)} className="col-sm-6">
		                        {/*<div className="form-group">
		                            <label className="d-block gradient-color" htmlFor="exampleInputEmail1">Contact Name*
		                                <span className="float-right d-inline-block mandatory-tag">All fields mark as * are mandatory</span>
		                            </label>
		                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter name" />
		                        </div>*/}
		                        <Field 
              			        	component={FormField} type="text"
              			        	name="contact_name" label="Contact Name*"
              			        	id="contactName" labelClassName="gradient-color"
              			        	placeholder="Enter contact name" validate={Required} doValidate={true}/>
              			        <Field 
              			        	component={FormField} type="text"
              			        	name="contact_title" label="Contact Title*"
              			        	id="contactTitle" labelClassName="gradient-color"
              			        	placeholder="Contact title" validate={Required} doValidate={true}/>
              			        <Field 
              			        	component={FormField} type="email"
              			        	name="email_address" label="Email Address*"
              			        	id="email" labelClassName="gradient-color"
              			        	placeholder="Enter email address" validate={[Required,Email]} doValidate={true}/>
		                        <div className="form-row">
		                        	<Field 
		                        		component={FormField} type="text" formGroupClassName="col-md-6"
		                        		name="contact_telephoneno" label="Contact Telephone Number*"
		                        		id="ContactTelephoneNumber" labelClassName="gradient-color"
		                        		placeholder="Contact Telephone Number"
		                        		doValidate={true} maskInput={true} inputAddOn={true} inputAddOnText="+1"/>
		                        	<Field 
		                        		component={FormField} type="text" formGroupClassName="col-md-6"
		                        		name="school_telephoneno" label="School Telephone Number"
		                        		id="SchoolTelephoneNumber" labelClassName="gradient-color"
		                        		placeholder="School Telephone Number"
		                        		doValidate={true} maskInput={true} inputAddOn={true} inputAddOnText="+1"/>
		                        </div>
		                        <Field 
              			        	component={FormField} type="text"
              			        	name="school_name" label="School Name*"
              			        	id="schoolName" labelClassName="gradient-color"
              			        	placeholder="Enter school name" validate={Required} doValidate={true}/>
              			        <Field 
              			        	component={FormField} type="text"
              			        	name="school_address" label="School Address*"
              			        	id="schoolAddress" labelClassName="gradient-color"
              			        	placeholder="Enter school address" validate={Required} doValidate={true}/>
		                        
		                        <div className="form-row">
		                            <Field 
		                            	component={FormField} type="text" formGroupClassName="col-md-4"
		                            	name="no_of_students" label="Total No. of Students"
		                            	id="noOfStudents" labelClassName="gradient-color"
		                            	doValidate={true} validate={Number}
		                            	placeholder="0"/>
		                            <Field 
		                            	component={FormSelect} formGroupClassName="col-md-4"
		                            	name="school_type" type="select" emptyText="Select school"
		                            	label="Type of School" className="input_both" options={options}
		                            	displayKey={"key"} displayLabel={"value"} empty={true}
		                            	labelClassName="gradient-color"/>
		                            <Field 
		                            	component={FormSelect} formGroupClassName="col-md-4"
		                            	name="school_level" type="select" emptyText="Select levels"
		                            	label="School Levels" className="input_both" options={levels}
		                            	displayKey={"key"} displayLabel={"value"} empty={true}
		                            	labelClassName="gradient-color"/>
		                        </div>
		                        
		                        <Field 
              			        	component={FormField} type="text"
              			        	name="become_pilot_description" label="Why do you want your school to be a part of the pilot program?"
              			        	id="become_pilot_description" labelClassName="gradient-color"
              			        	placeholder="Enter reason"/>
		                        
		                        <Field 
              			        	component={FormField} type="text"
              			        	name="no_of_students_laptop" label="Does your school have student laptops, and if so how many?"
              			        	id="no_of_students_laptop" labelClassName="gradient-color"
              			        	placeholder="0" doValidate={true} validate={Number} />
		                       
		                        <Field 
              			        	component={FormField} type="textarea"
              			        	name="lesson_planning" label="What are your school's challenges as they relate to online lesson planning?"
              			        	id="lessonPlanning" labelClassName="gradient-color" rows="3" />
		                        
		                        <Field 
              			        	component={FormField} type="textarea"
              			        	name="grade_book" label="What are your school's challenges as they relate to the teacher's grade book?"
              			        	id="gradeBook" labelClassName="gradient-color" rows="3" />

              			        <Field 
              			        	component={FormField} type="textarea"
              			        	name="student_class" label="What are your school's challenges as they relate to student's classwork?"
              			        	id="studentClass" labelClassName="gradient-color" rows="3" />

              			        <Field 
              			        	component={FormField} type="textarea"
              			        	name="goal_lesson_planning" label="What are your school's goals as they relate to online lesson planning?"
              			        	id="goalLessonPlanning" labelClassName="gradient-color" rows="3" />

              			        <Field 
              			        	component={FormField} type="textarea"
              			        	name="grade_book" label="What are your school's goals as they relate to the teacher's grade book?"
              			        	id="gradeBook" labelClassName="gradient-color" rows="3" />

              			        <Field 
              			        	component={FormField} type="textarea"
              			        	name="goal_student_class" label="What are your school's goals as they relate to student's classwork?"
              			        	id="goalStudentClass" labelClassName="gradient-color" rows="3"/>
		                
	                        	<FormSubmit 
            						error={error} invalid={pristine}
            						submitting={submitting} className="btn-block btn-primary"
            						buttonSaveLoading="Processing..." buttonSave="Submit"/>
	                      	</Form>
                      	</div>
                    </div>
                </div>
      		</div>
    	);
  	}
  	formSubmit(values) {
  		const {dispatch, reset} = this.props;
  		if( _.has(values, 'contact_telephoneno') ) {
  			values.contact_telephoneno = _.replace(values.contact_telephoneno, /-|\s|\+1/g, "");
  		}
  		if( _.has(values, 'school_telephoneno') ) {
  			values.school_telephoneno = _.replace(values.school_telephoneno, /-|\s|\+1/g, "");
  		}

  		return new Promise((resolve, reject) => {
  			Http.post('signupSchool', values)
  			.then(({data}) => {
  				console.log(data);
  				dispatch(reset('signupForm'));
  				resolve();
  			})
  			.catch(({errors}) => {
  				let _message = {_error: errors.message};
  				
  				if( errors.hasOwnProperty('email_address') ) {
  					_message = {email_address: errors.email_address.message};
  				}
  				
  				reject(new SubmissionError(_message));
  			});
  		});
  	}
}

const flattenObject = (c, d = '.') => {
  const r = {};
  (function f(o, p) {
      Object.keys(o).forEach(k => (o[k] && typeof o[k] === 'object' ? f(o[k], p ? `${p}${d}${k}` : k) : (r[p ? `${p}${d}${k}` : k] = o[k])));
  }(c));
  return r;
};

const _RegisterForm = reduxForm({
  	form: 'signupForm',
  	validate: (values) => {
    	const errors = {};
    	if(!values.contact_telephoneno) {
      		errors.contact_telephoneno = 'Contact number is required';
    	}  else if(!/^([0|[1-9][0-9]{9})$/i.test(_.replace(values.contact_telephoneno, /-|\s|\+1/g, ""))) {
    		errors.contact_telephoneno = 'Enter valid number';
    	}
    	return errors;
    },
    onSubmitFail: (errors) => {
    	// https://github.com/erikras/redux-form/issues/2365
    	const errorEl = document.querySelector(
    		// flattenObject: https://github.com/hughsk/flat/issues/52
    		Object.keys(flattenObject(errors)).map(fieldName => `[name="${fieldName}"]`).join(',')
  		);
  		
  		if (errorEl && errorEl.focus) {
  			errorEl.focus();
  		}	
    }
})(RegisterForm);

export default _RegisterForm;