/* global _ */
import React, {Component} from 'react';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FormDropdown from "../Common/FormDropdown";
import FormSubmit from "../Common/FormSubmit";
import FileInput from "../Common/FileInput";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ImageCropper from '../Common/ImageCropper';

import {handleSubmitFailed, scrollToByClassName} from '../../lib/Helper';
import {Required, Email, ContactNumber,maxLength200,maxLength400, Alphabets, isValidAddress, OSIS, maxLength10, Phone} from '../../lib/Validate';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import FormCalender from '../Common/FormCalender';
import {connect} from 'react-redux';

class AddClass extends Component {
	constructor() {
        super();
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {
            success: '',
            reset: false
        }
    }
    formSubmit(values) {
    	console.log(values);
    }
	render() {
		const { error, handleSubmit, pristine, submitting, initialValues, change, user, toggleForm} = this.props;
		const { success, reset } = this.state;
        
        const options = [
            {value: 'male', name: 'Male'},
            {abbreviation: 'female', name: 'Female'}
        ]
		return (
			<div className="right-group">
			    <div className="right-group-content">
			        <div className="create-teacher">
			            <Form onSubmit={handleSubmit(this.formSubmit)}>
			                <Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>
			                <div className="p-3 teacher-forms">
			                    <div className="d-flex justify-content-between align-items-center">
			                        <div>
			                            <div className="imports-button d-flex justify-content-start">
			                                <button type="button" className="btn btn-info" onClick={toggleForm}>Cancel</button>
			                            </div>
			                        </div>
			                        <div>
			                            <div className="text-uppercase font-weight-bold teach-head">Add Student</div>
			                        </div>
			                        <div>

			                            <FormSubmit 
			                                error={error} invalid={pristine}
			                                submitting={submitting} className="btn-primary ml-1"
			                                buttonSaveLoading="Processing..." buttonSave="Save"/>
			                        </div>
			                    </div>
			                </div>
			    
			                <div className="p-3">
			                    
			                    <div className="tabs-heading text-uppercase font-weight-bold">student INFORMATION</div>
			                    <div className="form-row">
			                        <Field 
			                            component={FormField} type="text" formGroupClassName="col-md-12 col-lg-6"
			                            name="first_name" label="First Name"
			                            id="First_Name" placeholder="Enter first name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
			                        <Field 
			                            component={FormField} type="text" formGroupClassName="col-md-12 col-lg-6"
			                            name="last_name" label="Last Name"
			                            id="First_Name" placeholder="Enter last name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
			                    </div>

			                    <div className="form-row">
			                        <Field 
			                            component={FormCalender} type="text" formGroupClassName="col-md-12 col-lg-6"
			                            name="dob" label="DOB"
			                            id="DOB" placeholder="DD/MM/YYYY" validate={[Required]} doValidate={true}/>
			                       <Field 
			                            component={FormSelect} formGroupClassName="col-md-6 col-lg-6" name="gender" type="select" 
			                            emptyText="Select Gender" label="Gender" options={options}
			                            displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>
			                    </div>

			                    

			                    <div className="form-row ml-1 mb-4 mt-3">
			                        <Field component={ImageCropper} name="image" reset={reset}/>
			                    </div>

			                    <div className="tabs-heading text-uppercase font-weight-bold">contact INFORMATION</div>

			                    <div className="form-row">
			                        <Field 
			                            component={FormField} type="text" formGroupClassName="col-md-12 col-lg-12"
			                            name="student_address" label="Student Address" placesAutocomplete={true} onSelect={this.handleSelect}
			                            id="Address" placeholder="Enter address" validate={[Required, maxLength200]} doValidate={true}/>
			                    </div>

			                    <div className="form-row">
			                        <Field 
			                            component={FormField} type="text" formGroupClassName="col-md-12 col-lg-6"
			                            name="email_address" label="Email Address (Optional)"
			                            id="Email (Optional)" placeholder="Enter email" validate={[Email]} doValidate={true}/>
			                        <Field 
			                            component={FormField} type="text" formGroupClassName="col-md-12 col-lg-6"
			                            name="contact_telephoneno" label="Contact Number (Optional)"  maskInput={true} inputAddOn={true} inputAddOnText="+1"
			                            id="Contact Number" placeholder="Enter contact number" validate={Phone} doValidate={true}/>
			                    </div>
			                    
			                </div>
			            </Form>

			        </div>
			    </div>
			</div> 
		)
	}
}
let AddClassForm = reduxForm({
    form: 'AddClassForm',
    onSubmitFail: handleSubmitFailed,
    asyncValidate: isValidAddress,
    asyncBlurFields: ['student_address'],
})(AddClass);

export default AddClassForm;