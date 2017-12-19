/* global _ */
import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
//import FormSelect from "../Common/FormSelect";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number, maxLength4,maxLength200,maxLength400, Alphabets, isValidAddress, ContactNumber, Phone} from '../../lib/Validate';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import './Register.css';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { handleSubmitFailed} from '../../lib/Helper';
import FormDropdown from "../Common/FormDropdown";
import {connect} from 'react-redux';

class RegisterForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.handleSelect = this.handleSelect.bind(this);
      	this.state = {
      		success: '',
      		options:[],
      		levels:[],
      		coordinates : {
      			lat: '',
      			lng: ''
      		}
      	}
    }
    /*componentDidMount() {
    	getMasterData()
    	.then(({school_level, school_type}) => this.setState({school_level, school_type}))
    	.catch(error => { throw new SubmissionError(error.message) });
    }*/
    handleSelect(address) {
		geocodeByAddress(address)
		.then(result => {
			this.fillFormFields(result);
			return getLatLng(result[0])
		})
		.then(({ lat, lng }) => {
			let request = {
				lat, lng
			}
			this.setState({coordinates: request});
		})
		.catch(err => { throw new SubmissionError(err.message) });
    }
    fillFormFields(address) {
    	const {change} = this.props;
    	let componentForm = {
			street_number: 'short_name',
			route: 'long_name',
			locality: 'long_name',
			administrative_area_level_1: 'short_name',
			country: 'long_name',
			postal_code: 'short_name'
		};
    	if( address.length > 0 ) {
    		let address_components = address[0].address_components;
    		change('school_address', address[0].formatted_address);
    		for (var i = 0; i < address_components.length; i++) {
				var addressType = address_components[i].types[0];
				if (componentForm[addressType]) {
					var val = address_components[i][componentForm[addressType]];
					if (addressType === 'administrative_area_level_1' ) {
						change('state', val);
					}
					if (addressType === 'locality') {
						change('city', val);
					}
					if (addressType === 'country') {
						change('country', val);
					}
					if (addressType === 'postal_code') {
						change('postal_code', val);
					}					
				}
			}
    	}
    }
  	render() {
  		const { error, handleSubmit, pristine, submitting} = this.props;
  		const {school_type, school_level} = this.props.masterdata;
  		
    	return (
     		<div className="App">
        		<div className="light-bg padding-50">
                    <div className="container">
                      	<div className="row justify-content-center">
                      		<Form onSubmit={handleSubmit(this.formSubmit)} className="col-md-10 col-lg-8 col-xl-7">
                      			<Alert alertVisible={error} alertMsg={error} className={error ? "danger":"success"}/>
								<span className="float-right d-inline-block mandatory-tag">All fields mark as * are mandatory</span>
		                        <Field 
              			        	component={FormField} type="text"
              			        	name="contact_name" label="Contact Name*"
              			        	id="contactName" labelClassName="gradient-color"
              			        	placeholder="Enter contact name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
              			        <Field 
              			        	component={FormField} type="text"
              			        	name="contact_title" label="Contact Title*"
              			        	id="contactTitle" labelClassName="gradient-color"
              			        	placeholder="Enter contact title" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
              			        	
              			        <Field 
              			        	component={FormField} type="email"
              			        	name="email_address" label="Email Address*"
              			        	id="email" labelClassName="gradient-color"
              			        	placeholder="Enter email address" validate={[Required,Email]} doValidate={true}/>
		                        <div className="form-row">
		                        	<Field 
		                        		component={FormField} type="text" formGroupClassName="col-md-6"
		                        		name="contact_telephoneno" label="Enter contact Telephone Number*"
		                        		id="ContactTelephoneNumber" labelClassName="gradient-color"
		                        		placeholder="Enter contact telephone number" validate={[ContactNumber, Phone]}
		                        		doValidate={true} maskInput={true} inputAddOn={true} inputAddOnText="+1"/>
		                        	<Field 
		                        		component={FormField} type="text" formGroupClassName="col-md-6"
		                        		name="school_telephoneno" label="School Telephone Number"
		                        		id="SchoolTelephoneNumber" labelClassName="gradient-color"
		                        		placeholder="Enter school telephone number" validate={[Phone]}
		                        		doValidate={true} maskInput={true} inputAddOn={true} inputAddOnText="+1"/>
		                        </div>
		                        <Field 
              			        	component={FormField} type="text"
              			        	name="school_name" label="School Name*"
              			        	id="schoolName" labelClassName="gradient-color"
              			        	placeholder="Enter school name" validate={[Required, maxLength200]} doValidate={true}/>
              			        <Field 
              			        	component={FormField} type="text"
              			        	name="school_address" label="School Address*"
              			        	id="schoolAddress" labelClassName="gradient-color" placesAutocomplete={true} onSelect={this.handleSelect}
              			        	placeholder="Enter school address" validate={[Required, maxLength200]} doValidate={true}/>
		                        
								<Field 
		                            component={FormField} type="text"
		                            name="no_of_students" label="Enter Total No. of Students"
		                            id="noOfStudents" labelClassName="gradient-color"
		                            doValidate={true} validate={[Number, maxLength4]}
		                            placeholder="Enter Total No. of Students"/>
									
		                        <div className="form-row">
		                            {/*<Field 
		                            	component={FormSelect} formGroupClassName="col-md-6"
		                            	name="school_type" type="select" emptyText="Select school"
		                            	label="Type of School" className="input_both" options={school_type}
		                            	displayKey={"_id"} displayLabel={"name"} empty={true}
		                            	labelClassName="gradient-color"/>*/}
		                            <Field 
		                                component={FormDropdown} formGroupClassName="col-md-6"
		                                name="school_type" empty={true} emptyText="Select type"
		                                label="Type of School" data={school_type} placeholder="Select type"
		                                valueField={"abbreviation"} textField={"name"} labelClassName="gradient-color"/>	
		                            {/*<Field 
		                            	component={FormSelect} formGroupClassName="col-md-6"
		                            	name="school_level" type="select" emptyText="Select levels"
		                            	label="School Levels" className="input_both" options={school_level}
		                            	displayKey={"_id"} displayLabel={"value"} empty={true}
		                            	labelClassName="gradient-color"/>*/}
	                            	<Field 
	                            	    component={FormDropdown} formGroupClassName="col-md-6"
	                            	    name="school_level" data={school_level} labelClassName="gradient-color"
	                            	    label="School Levels" placeholder="School level"
	                            	    valueField={"key"} textField={"value"} empty={true} emptyText="School level"/>
		                        </div>
		                        
		                        <Field 
              			        	component={FormField} type="textarea"
              			        	name="become_pilot_description" label="Why do you want your school to be a part of the pilot program?"
              			        	id="become_pilot_description" labelClassName="gradient-color"
              			        	rows="3" validate={maxLength400} doValidate={true}/>
		                        
		                        <Field 
              			        	component={FormField} type="text"
              			        	name="no_of_students_laptop" label="Does your school have student laptops, and if so how many?"
              			        	id="no_of_students_laptop" labelClassName="gradient-color"
              			        	placeholder="0" doValidate={true} validate={Number} />
		                       
								<div className="gradient-color font-weight-bold mt-4 mb-3">What are your school's challenges as they relate to:</div>

		                        <Field 
              			        	component={FormField} type="textarea"
              			        	name="school_challenges_lesson_planning" label="What are your school's challenges as they relate to online lesson planning?"
              			        	id="lessonPlanning" labelClassName="gradient-color" rows="3" validate={maxLength400} doValidate={true} />
		                        
		                        <Field 
              			        	component={FormField} type="textarea"
              			        	name="school_challenges_teacher_gradebook" label="What are your school's challenges as they relate to the teacher's grade book?"
              			        	id="gradeBook" labelClassName="gradient-color" rows="3" validate={maxLength400} doValidate={true} />

              			        <Field 
              			        	component={FormField} type="textarea"
              			        	name="school_challenges_students_classwork" label="What are your school's challenges as they relate to student's classwork?"
              			        	id="studentClass" labelClassName="gradient-color" rows="3" validate={maxLength400} doValidate={true} />

								<div className="gradient-color font-weight-bold mt-4 mb-3">What are your school's goals as they relate to:</div>
								  
								<Field 
								component={FormField} type="textarea"
								name="school_goals_lesson_planning" label="What are your school's goals as they relate to online lesson planning?"
								id="goalLessonPlanning" labelClassName="gradient-color" rows="3" validate={maxLength400} doValidate={true} />

              			        <Field 
              			        	component={FormField} type="textarea"
              			        	name="school_goals_teacher_gradebook" label="What are your school's goals as they relate to the teacher's grade book?"
              			        	id="gradeBook" labelClassName="gradient-color" rows="3" validate={maxLength400} doValidate={true} />

              			        <Field 
              			        	component={FormField} type="textarea"
              			        	name="school_goals_students_classwork" label="What are your school's goals as they relate to student's classwork?"
              			        	id="goalStudentClass" labelClassName="gradient-color" rows="3" validate={maxLength400} doValidate={true}/>
		                
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
  		
  		const {dispatch, reset, showThanks} = this.props;
  		const {lat, lng} = this.state.coordinates;
        if( !lat && !lng ) {
            throw new SubmissionError({student_address:'Invalid address'});
            return;
        }
        values.lat = lat;
        values.lng = lng;
  		if( _.has(values, 'contact_telephoneno') ) {
  			values.contact_telephoneno = _.replace(values.contact_telephoneno, /-|\s|\+1/g, "");
  		}
  		if( _.has(values, 'school_telephoneno') ) {
  			values.school_telephoneno = _.replace(values.school_telephoneno, /-|\s|\+1/g, "");
  		}
  		/*if( _.has(values, 'school_type') ) {
  			values.school_type = isJson(values.school_type) ? JSON.parse(values.school_type) : values.school_type;
  		}*/
  		return new Promise((resolve, reject) => {
  			Http.post('signupSchool', values)
  			.then(({data}) => {
  				dispatch(reset('signupForm'));
  				showThanks();
  				resolve();
  			})
  			.catch(({errors}) => {
  				let _message = {_error: errors.message || 'Internal Server error'};
  				
  				if( errors.hasOwnProperty('email_address') ) {
  					_message = {email_address: errors.email_address.message};
  				}
  				
  				reject(new SubmissionError(_message));
  			});
  		});
  	}
}

const _RegisterForm = reduxForm({
  	form: 'signupForm',
  	asyncValidate: isValidAddress,
    asyncBlurFields: ['school_address'],
    onSubmitFail: handleSubmitFailed
})(RegisterForm);

const mapStateToProps = (state) => ({
	masterdata: state.masterdb
})
export default connect(mapStateToProps)(_RegisterForm);