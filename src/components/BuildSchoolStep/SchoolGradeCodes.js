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

                    <div className="form-row">
                        <Field 
                            component={FormSelect} formGroupClassName="col-md-4"
                            name="How many marking periods in a year?" type="select" emptyText="How many marking periods in a year?"
                            label="How many marking periods in a year?" className="input_both" options={options}
                            displayKey={null} displayLabel={"name"} empty={true} />
                    </div>

                    <div className="form-row">
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-4"
                            name="Add Name" label="Add Name" disabled={true}
                            id="Add_Name"
                            placeholder="Marking Period 1" validate={[Required, maxLength200]} doValidate={true}/>
                        
                        <div className="form-group col-md-4">
                            <FormGroup>
                                <Label for="exampleDate">Start Date</Label>
                                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                            </FormGroup>
                        </div>

                        <div className="form-group col-md-4">
                            <FormGroup>
                                <Label for="exampleDate">End Date</Label>
                                <Input type="date" name="date" id="exampleDate" placeholder="End placeholder" />
                            </FormGroup>
                        </div>
                        <div><button type="button" className="btn btn-link click-link pointer">Remove</button></div>
                    </div>

                    <div className="form-row">
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-4"
                            name="Add Name" label="Add Name" disabled={true}
                            id="Add_Name" placeholder="Marking Period 1" validate={[Required, maxLength200]} doValidate={true}/>
                        
                        <div className="form-group col-md-4">
                            <FormGroup>
                                <Label for="exampleDate">Start Date</Label>
                                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                            </FormGroup>
                        </div>

                        <div className="form-group col-md-4">
                            <FormGroup>
                                <Label for="exampleDate">End Date</Label>
                                <Input type="date" name="date" id="exampleDate" placeholder="End placeholder" />
                            </FormGroup>
                        </div>
                    </div>
                    
                    <div className="tabs-heading font-weight-bold">Contact Information</div>
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