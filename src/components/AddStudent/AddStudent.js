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
import './AddStudent.css';
import {handleSubmitFailed, scrollToByClassName, gender} from '../../lib/Helper';
import {Required, Email, ContactNumber,maxLength200,maxLength400, Alphabets, isValidAddress, OSIS, maxLength10, Phone} from '../../lib/Validate';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import FormCalender from '../Common/FormCalender';
import {connect} from 'react-redux';

class AddStudent extends Component {
    constructor() {
        super();
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.fillFormFields = this.fillFormFields.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.state = {
            success: '',
            reset: false,
            coordinates : {
                lat: '',
                lng: ''
            }
        }
    }
    resetForm() {
        const {dispatch, reset} = this.props;
        dispatch(reset('AddStudentForm'));
        this.setState({reset: true});
    }

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
            change('student_address', address[0].formatted_address);
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
        const { error, handleSubmit, pristine, submitting, initialValues, change, user, toggleForm} = this.props;
        const { success, reset } = this.state;
        const {additional_health_info} = this.props.masterdata;

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
                                        emptyText="Select Gender" label="Gender" options={gender}
                                        displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>
                                </div>

                                <div className="form-row">
                                    <Field 
                                        component={FormDropdown} formGroupClassName="col-md-12 col-lg-6" name="additional_health_info" type="select" 
                                        label="Additional Health Info " data={additional_health_info} placeholder="Select health info"
                                        valueField={"_id"} textField={"name"} empty={true} emptyText="Select health info"/>      
                                    <Field 
                                        component={FormField} type="text" formGroupClassName="col-md-12 col-lg-6"
                                        name="osis_number" label="Student OSIS Number"
                                        id="osis_number" placeholder="Enter osis number" validate={[Required,OSIS,maxLength10]} doValidate={true}/>     
                                </div>

                                <div className="form-row ml-1 mb-4 mt-3">
                                    <Field component={ImageCropper} name="image" reset={reset}/>
                                </div>

                                <div className="tabs-heading text-uppercase font-weight-bold">contact INFORMATION</div>

                                {/*<div className="form-row">
                                    <Field 
                                        component={FormField} type="text" formGroupClassName="col-md-12 col-lg-6"
                                        name="parent_name" label=" Name"
                                        id="Name" placeholder="Enter name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
                                    <Field 
                                        component={FormField} type="text" formGroupClassName="col-md-12 col-lg-6"
                                        name="parent_relation" label="Relation"
                                        id="Relation" placeholder="Enter relation" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
                                </div>*/}

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
    formSubmit(values) {
        
        const {user, dispatch, reset, refreshList} = this.props;
        const {lat, lng} = this.state.coordinates;
        if( !lat && !lng ) {
            throw new SubmissionError({student_address:'Invalid address'});
            return;
        }
        values.lat = lat;
        values.lng = lng;
        values._id = user._id;
        if( _.has(values, 'contact_telephoneno') ) {
            values.contact_telephoneno = _.replace(values.contact_telephoneno, /-|\s|\+1/g, "");
        }
        return new Promise((resolve, reject) => {
            Http.upload('addstudent', values)
            .then(({data}) => {
                
                this.setState({success:data.message, reset: true});
                dispatch(reset('AddStudentForm'));
                setTimeout(() => this.setState({success: '', reset: false}), 5000);
                scrollToByClassName('right-group-content');
                refreshList();
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
let AddStudentForm = reduxForm({
    form: 'AddStudentForm',
    onSubmitFail: handleSubmitFailed,
    asyncValidate: isValidAddress,
    asyncBlurFields: ['student_address'],
})(AddStudent);

const mapStateToProps = (state) => ({
    user: state.auth.user,
    masterdata: state.masterdb
})
export default connect(mapStateToProps)(AddStudentForm);
