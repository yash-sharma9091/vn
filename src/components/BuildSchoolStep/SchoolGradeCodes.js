/* global _ */
import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback, InputGroupAddon, InputGroup } from 'reactstrap';
import CameraImage from '../../assets/images/svg/photo-camera.svg';
import DeleteImage from '../../assets/images/svg/delete-button.svg';
import EditImage from '../../assets/images/svg/edit.svg';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number, maxLength4,maxLength200,maxLength400} from '../../lib/Validate';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import CrossImage from '../../assets/images/svg/cancel.svg';

class SchoolGradeCodes extends Component {
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
			{abbreviation: 'P', name: 'Public School'},
			{abbreviation: 'R', name: 'Private School'},
			{abbreviation: 'C', name: 'Charter School'},
			{abbreviation: 'A', name: 'Parochia School'},
			{abbreviation: 'other', name: 'Other'}
		], levels = [
			{key: 'k5', value: 'K-5'},
			{key: 'k6', value: 'K-6'},
			{key: 'k8', value: 'K-8'},
			{key: 'k9', value: 'K-9'},
			{key: 'k12', value: 'K-12'}
		];
    	return (
            <div className="row justify-content-between">
                <Form onSubmit={handleSubmit(this.formSubmit)} className="col-sm-12">
                    <Alert alertVisible={error} alertMsg={error} className={error ? "danger":"success"}/>

					<div className="group-box">
						<div className="form-row relative">
							<Field 
								component={FormSelect} formGroupClassName="col-md-4"
								name="How many marking periods in a year?" type="select" emptyText="2"
								label="How many marking periods in a year?" className="input_both" options={options}
								displayKey={null} displayLabel={"name"} empty={true} />
						</div>

						<div className="form-row relative">
								<Field 
								component={FormField} type="text" formGroupClassName="col-md-4"
								name="Add Name" label="Add Name" disabled={true}
								id="Add_Name"
								placeholder="Marking Period 1" validate={[Required, maxLength200]} doValidate={true}/>
							
								<FormGroup className="col-md-4">
									<Label for="exampleDate">Start Date</Label>
									<Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
								</FormGroup>

								<FormGroup className="col-md-4">
									<Label for="exampleDate">End Date</Label>
									<Input type="date" name="date" id="exampleDate" placeholder="End placeholder" />
								</FormGroup>

							    <button type="button" className="btn btn-link remove-link pointer">Remove</button>
						</div>

						<div className="form-row relative">
							<Field 
								component={FormField} type="text" formGroupClassName="col-md-4"
								name="Add Name" label="Add Name" disabled={true}
								id="Add_Name"
								placeholder="Marking Period 1" validate={[Required, maxLength200]} doValidate={true}/>
							
								<FormGroup className="col-md-4">
									<Label for="exampleDate">Start Date</Label>
									<Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
								</FormGroup>

								<FormGroup className="col-md-4">
									<Label for="exampleDate">End Date</Label>
									<Input type="date" name="date" id="exampleDate" placeholder="End placeholder" />
								</FormGroup>

							    <button type="button" className="btn btn-link remove-link pointer">Remove</button>
						</div>
						<button type="button" className="btn btn-link addMore-link pointer">+ Add More Marking Period</button>
					</div>

                    <div className="tabs-heading font-weight-bold">Add Classes</div>

					<div className="group-box">
						<div className="form-row">
							<Field 
								component={FormSelect} formGroupClassName="col-md-4"
								name="How many classes you have in your school?" type="select" emptyText="2"
								label="How many classes you have in your school?" className="input_both" options={options}
								displayKey={null} displayLabel={"name"} empty={true} />
						</div>

						<div className="p-3 light-bg relative">
							<div className="form-row">
								<Field 
									component={FormField} type="text" formGroupClassName="col-md-6"
									name="Add Classes" label="Add Classes" disabled={true}
									id="Add Classes" placeholder="Enter classes" validate={[Required, maxLength200]} doValidate={true}/>
								
								<button type="button" className="btn btn-link addMore-link pointer">+ Add Code</button>
							</div>
							<div className="form-row">
								<div className="form-group col-md-3 code-box relative">
									<label>Code 1</label>
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Enter code" />
										<span className="input-group-addon" id="basic-addon2"><img src={CrossImage} /></span>
									</div>
									<button type="button" className="btn btn-link delete-link pointer">Delete</button>
								</div>

								<div className="form-group col-md-3 code-box relative">
									<label>Code 2</label>
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Enter code" />
										<span className="input-group-addon" id="basic-addon2"><img src={CrossImage} /></span>
									</div>
									<button type="button" className="btn btn-link delete-link pointer">Delete</button>
								</div>

								<div className="form-group col-md-3 code-box relative">
									<label>Code 3</label>
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Enter code" />
										<span className="input-group-addon" id="basic-addon2"><img src={CrossImage} /></span>
									</div>
									<button type="button" className="btn btn-link delete-link pointer">Delete</button>
								</div>

								<div className="form-group col-md-3 code-box relative">
									<label>Code 4</label>
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Enter code" />
										<span className="input-group-addon" id="basic-addon2"><img src={CrossImage} /></span>
									</div>
									<button type="button" className="btn btn-link delete-link pointer">Delete</button>
								</div>
								
								<div className="form-group col-md-3 code-box relative">
									<label>Code 5</label>
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Enter code" />
										<span className="input-group-addon" id="basic-addon2"><img src={CrossImage} /></span>
									</div>
									<button type="button" className="btn btn-link delete-link pointer">Delete</button>
								</div>

								<div className="form-group col-md-3 code-box relative">
									<label>Code 6</label>
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Enter code" />
										<span className="input-group-addon" id="basic-addon2"><img src={CrossImage} /></span>
									</div>
								</div>

								<div className="form-group col-md-3 code-box relative">
									<label>Code 7</label>
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Enter code" />
										<span className="input-group-addon" id="basic-addon2"><img src={CrossImage} /></span>
									</div>
									<button type="button" className="btn btn-link delete-link pointer">Delete</button>
								</div>
							</div>
							<button type="button" className="btn btn-link remove-link-onbox pointer">Remove</button>
						</div>

						<button type="button" className="btn btn-link addMore-link pointer">+ Add More Classes</button>
					</div>

					<div className="tabs-heading font-weight-bold">Add Subjects</div>

					<div className="group-box">
						<div className="form-row relative">
							<Field 
								component={FormField} type="text" formGroupClassName="col-md-6"
								name="Add Subject" label="Add Subject" disabled={true}
								id="Add Subject" placeholder="Enter subject name" validate={[Required, maxLength200]} doValidate={true}/>
								
							<Field 
								component={FormSelect} formGroupClassName="col-md-6"
								name="How many classes will be teaching the subject?" type="select" emptyText="2"
								label="How many classes will be teaching the subject?" className="input_both" options={options}
								displayKey={null} displayLabel={"name"} empty={true} />
							
							<button type="button" className="btn btn-link remove-link pointer">Remove</button>
						</div>

						<div className="p-3 light-bg relative mt-3">
						 	<div className="form-row relative">
								<Field 
									component={FormField} type="text" formGroupClassName="col-md-6"
									name="Subject Code" label="Subject Code" disabled={true}
									id="Subject_Code" placeholder="Enter subject code" validate={[Required, maxLength200]} doValidate={true}/>
								
								<Field 
									component={FormField} type="text" formGroupClassName="col-md-6"
									name="Class Code" label="Class Code" disabled={true}
									id="Class Code" placeholder="Enter class code" validate={[Required, maxLength200]} doValidate={true}/>
								<button type="button" className="btn btn-link remove-link pointer">Remove</button>
							</div>

							<div className="form-row relative">
								<Field 
									component={FormField} type="text" formGroupClassName="col-md-6"
									name="Subject Code" label="Subject Code" disabled={true}
									id="Subject_Code" placeholder="Enter subject code" validate={[Required, maxLength200]} doValidate={true}/>
								
								<Field 
									component={FormField} type="text" formGroupClassName="col-md-6"
									name="Class Code" label="Class Code" disabled={true}
									id="Class Code" placeholder="Enter class code" validate={[Required, maxLength200]} doValidate={true}/>
								<button type="button" className="btn btn-link remove-link pointer">Remove</button>
							</div>
						</div>
					</div>

					<div className="group-box">
						<div className="form-row relative">
							<Field 
								component={FormField} type="text" formGroupClassName="col-md-6"
								name="Add Subject" label="Add Subject" disabled={true}
								id="Add Subject" placeholder="Enter subject name" validate={[Required, maxLength200]} doValidate={true}/>
								
							<Field 
								component={FormSelect} formGroupClassName="col-md-6"
								name="How many classes will be teaching the subject?" type="select" emptyText="2"
								label="How many classes will be teaching the subject?" className="input_both" options={options}
								displayKey={null} displayLabel={"name"} empty={true} />
							
							<button type="button" className="btn btn-link remove-link pointer">Remove</button>
						</div>
					</div>
					<button type="button" className="btn btn-link addMore-link pointer">+ Add More Subject</button>

                    <div className="row justify-content-center both-button">
                        <button type="button" className="btn btn-info mr-1">Cancel</button>
                        
                        <FormSubmit 
                            error={error} invalid={pristine}
                            submitting={submitting} className="btn-primary ml-1"
                            buttonSaveLoading="Processing..." buttonSave="Save"/>
                    </div>
                </Form>
            </div>
    	);
  	}
  	isJson(str) {
	    try {
	        JSON.parse(str);
	    } catch (e) {
	        return false;
	    }
	    return true;
	}
  	formSubmit(values) {
  		const {dispatch, reset, showThanks} = this.props;
  		if( _.has(values, 'contact_telephoneno') ) {
  			values.contact_telephoneno = _.replace(values.contact_telephoneno, /-|\s|\+1/g, "");
  		}
  		if( _.has(values, 'school_telephoneno') ) {
  			values.school_telephoneno = _.replace(values.school_telephoneno, /-|\s|\+1/g, "");
  		}
  		if( _.has(values, 'school_type') ) {
  			values.school_type = this.isJson(values.school_type) ? JSON.parse(values.school_type) : values.school_type;
  		}
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

const flattenObject = (c, d = '.') => {
  const r = {};
  (function f(o, p) {
      Object.keys(o).forEach(k => (o[k] && typeof o[k] === 'object' ? f(o[k], p ? `${p}${d}${k}` : k) : (r[p ? `${p}${d}${k}` : k] = o[k])));
  }(c));
  return r;
};

const _SchoolGradeCodes = reduxForm({
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
  		} else {
  			window.scrollTo(0, 0);
  		}
    }
})(SchoolGradeCodes);

export default _SchoolGradeCodes;