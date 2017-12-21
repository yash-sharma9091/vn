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
import './AddClass.css';

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

						{/*ADD MARKING PERIODS*/}
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
			                            <div className="text-uppercase font-weight-bold teach-head">ADD MARKING PERIODS</div>
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
			                    
			                    <div className="form-row">
									<Field 
			                            component={FormSelect} formGroupClassName="col-md-12 col-lg-12" name="How many marking periods in a year?" type="select" 
			                            emptyText="2" label="How many marking periods in a year?" options={options}
			                            displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>
			                    </div>

								
			                    <div className="form-row">
									<Field 
			                            component={FormField} type="text" formGroupClassName="col-md-12 col-lg-12"
			                            name="Add Name" label="Add Name"
			                            id="Add_Name" placeholder="Marking Period 1" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
			                       
			                    </div>

								<div className="form-row">
									<Field 
			                            component={FormField} type="text" formGroupClassName="col-md-6 col-lg-6"
			                            name="Start Date" label="Start Date"
			                            id="Start Date" placeholder="MM/DD/YYYY" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>

									<Field 
			                            component={FormField} type="text" formGroupClassName="col-md-6 col-lg-6"
			                            name="End Date" label="End Date"
			                            id="End Date" placeholder="MM/DD/YYYY" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
			                       
			                    </div>

								<div className="add-more-box">
									<div className="form-row">
										<Field 
											component={FormField} type="text" formGroupClassName="col-md-12 col-lg-12"
											name="Add Name" label="Add Name"
											id="Add_Name" placeholder="Marking Period 2" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
									
									</div>

									<div className="form-row">
										<Field 
											component={FormField} type="text" formGroupClassName="col-md-6 col-lg-6"
											name="Start Date" label="Start Date"
											id="Start Date" placeholder="MM/DD/YYYY" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>

										<Field 
											component={FormField} type="text" formGroupClassName="col-md-6 col-lg-6"
											name="End Date" label="End Date"
											id="End Date" placeholder="MM/DD/YYYY" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
									
									</div>
								</div>

								<div className="add-more-box">
									<div className="form-row">
										<Field 
											component={FormField} type="text" formGroupClassName="col-md-12 col-lg-12"
											name="Add Name" label="Add Name"
											id="Add_Name" placeholder="Marking Period 2" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
									
									</div>

									<div className="form-row">
										<Field 
											component={FormField} type="text" formGroupClassName="col-md-6 col-lg-6"
											name="Start Date" label="Start Date"
											id="Start Date" placeholder="MM/DD/YYYY" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>

										<Field 
											component={FormField} type="text" formGroupClassName="col-md-6 col-lg-6"
											name="End Date" label="End Date"
											id="End Date" placeholder="MM/DD/YYYY" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
									
									</div>
								</div>

			                    
			                </div>
			            </Form>

						{/*ADD CLASSES*/}
						{/* <Form onSubmit={handleSubmit(this.formSubmit)}>
			                <Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>
			                <div className="p-3 teacher-forms">
			                    <div className="d-flex justify-content-between align-items-center">
			                        <div>
			                            <div className="imports-button d-flex justify-content-start">
			                                <button type="button" className="btn btn-info" onClick={toggleForm}>Cancel</button>
			                            </div>
			                        </div>
			                        <div>
			                            <div className="text-uppercase font-weight-bold teach-head">ADD CLASSES</div>
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
			                    
			                    <div className="form-row">
									<Field 
			                            component={FormSelect} formGroupClassName="col-md-12 col-lg-12" name="How many classes you have in your school?" type="select" 
			                            emptyText="2" label="How many classes you have in your school?" options={options}
			                            displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>
			                    </div>

								
			                    <div className="form-row">
									<Field 
			                            component={FormField} type="text" formGroupClassName="col-md-12 col-lg-12"
			                            name="Add Class" label="Add Class"
			                            id="Add Class" placeholder="Enter Class" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
			                       
			                    </div>

								<div className="form-row">
									<Field 
			                            component={FormField} type="text" formGroupClassName="col-md-12 col-lg-12"
			                            name="Add Class" label="Add Class"
			                            id="Add Class" placeholder="Enter Class" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
			                       
			                    </div>
			                    
			                </div>
			            </Form> */}

						{/*ADD SECTIONS*/}
						{/* <Form onSubmit={handleSubmit(this.formSubmit)}>
			                <Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>
			                <div className="p-3 teacher-forms">
			                    <div className="d-flex justify-content-between align-items-center">
			                        <div>
			                            <div className="imports-button d-flex justify-content-start">
			                                <button type="button" className="btn btn-info" onClick={toggleForm}>Cancel</button>
			                            </div>
			                        </div>
			                        <div>
			                            <div className="text-uppercase font-weight-bold teach-head">ADD sections</div>
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
			                    
			                    <div className="form-row">
									<Field 
			                            component={FormSelect} formGroupClassName="col-md-12 col-lg-12" name="How many classes you have in your school?" type="select" 
			                            emptyText="2" label="How many classes you have in your school?" options={options}
			                            displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>
			                    </div>

								
			                    <div className="form-row">
									<Field 
			                            component={FormSelect} formGroupClassName="col-md-6 col-lg-6" name="Add Class" type="select" 
			                            emptyText="Select class" label="Add Class" options={options}
			                            displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>

									<Field 
			                            component={FormSelect} formGroupClassName="col-md-6 col-lg-6" name="Section" type="select" 
			                            emptyText="Select Section" label="Section" options={options}
			                            displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>
			                       
			                    </div>

								<div className="form-row">
									<Field 
										component={FormSelect} formGroupClassName="col-md-6 col-lg-6" name="Add Class" type="select" 
										emptyText="Select class" label="Add Class" options={options}
										displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>

									<Field 
										component={FormSelect} formGroupClassName="col-md-6 col-lg-6" name="Section" type="select" 
										emptyText="Select Section" label="Section" options={options}
										displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>
							   
								</div>

			                    
			                </div>
			            </Form> */}

						{/*ADD SUBJECT CODE*/}
						{/* <Form onSubmit={handleSubmit(this.formSubmit)}>
			                <Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>
			                <div className="p-3 teacher-forms">
			                    <div className="d-flex justify-content-between align-items-center">
			                        <div>
			                            <div className="imports-button d-flex justify-content-start">
			                                <button type="button" className="btn btn-info" onClick={toggleForm}>Cancel</button>
			                            </div>
			                        </div>
			                        <div>
			                            <div className="text-uppercase font-weight-bold teach-head">ADD sUBJECT CODE</div>
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
			                    
								<div className="form-row">
									<Field 
			                            component={FormField} type="text" formGroupClassName="col-md-12 col-lg-12"
			                            name="Add Subject" label="Add Subject"
			                            id="Add_Subject" placeholder="Enter subject code" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
								</div>

			                </div>
			            </Form> */}

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