/* global IMAGE_PATH */
import React, {Component} from 'react';
import { Form } from 'reactstrap';
import ImageCropper from '../Common/ImageCropper';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {handleSubmitFailed, gender} from '../../lib/Helper';
import {Required, Email,maxLength200, Alphabets, isValidAddress, ContactNumber} from '../../lib/Validate';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FormDropdown from "../Common/FormDropdown";
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import {teacherListing} from '../../lib/SiteLinks';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
let success='';

class EditSchoolProfile extends Component {
    constructor() {
        super();
        //this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.fillFormFields = this.fillFormFields.bind(this);
        this.removeImage = this.removeImage.bind(this);
        //this.resetForm = this.resetForm.bind(this);
        this.state = {
            success: '',
            reset: false,
            schoolLogo:''
        }
    }
    handleSelect(address) {
        const {change} = this.props;
        geocodeByAddress(address)
        .then(result => {
            this.fillFormFields(result);
            return getLatLng(result[0])
        })
        .then(({ lat, lng }) => {
            change('lat', lat);
            change('lng', lng);
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
            change('teacher_address', address[0].formatted_address);
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
    
    componentDidMount(newProps) {
        const {school} = this.props;
        if(school) {
            const {school_logo} = school;
            if( school_logo ) {
                let schoolLogo = `${IMAGE_PATH}/${school_logo.path}`; 

                this.setState({schoolLogo});
            }
        }
    }
    removeImage() {
        this.setState({schoolLogo:''});
        this.props.change('school_logo',null);
    }
    render() {
        const { error, handleSubmit, school_type, school_level} = this.props;
        const {schoolLogo} = this.state;
        return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="edit-group-box">
                            <Form onSubmit={handleSubmit}>
                                <Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger alert-box":"success"}/>
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col-md-3 col-lg-2 inner-cropper">
                                            <Field component={ImageCropper} name="image" logo={schoolLogo} removeImage={this.removeImage}/>
                                        </div>
                                        <div className="col-md-9 col-lg-10">
                                            <div className="form-row pl-3">
                                                <Field 
                                                    component={FormField} type="text" formGroupClassName="mr-2"
                                                    name="school_name" label="School Name"
                                                    id="school_name" placeholder="Enter school name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="group-tehead">Personal Information</div>
                                <div className="p-3">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormDropdown} 
                                                formGroupClassName="row" name="school_type"
                                                label="Type of school "  colWrapper={true} col={9}
                                                data={school_type} placeholder="Select type"
                                                valueField={"_id"} textField={"name"} empty={true} emptyText="Select type" 
                                                labelClassName="col-sm-3"/>       
                                        </div>
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormDropdown} 
                                                formGroupClassName="row" name="school_level"
                                                label="School Levels "  colWrapper={true} col={9}
                                                data={school_level} placeholder="Select level"
                                                valueField={"_id"} textField={"name"} empty={true} emptyText="Select level" 
                                                labelClassName="col-sm-3"/>       
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Grade</label>
                                                <div className="col-sm-9">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Select grade</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                             <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Official Grade</label>
                                                <div className="col-sm-9">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Select official grade</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="group-tehead"> Contact Information</div>
                                <div className="p-3">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9}
                                                labelClassName="col-sm-3"
                                                name="teacher_address" label="Teacher Address" placesAutocomplete={true} onSelect={this.handleSelect}
                                                id="Teacher_Address" placeholder="Enter address" validate={[Required]} doValidate={true}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} 
                                                type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9} labelClassName="col-sm-3"
                                                name="email_address" label="Email Address"
                                                id="Email_Address" placeholder="Enter email address" validate={[Required, Email]} doValidate={true}/>    
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6">
                                                
                                        </div>
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" 
                                                formGroupClassName="row" colWrapper={true} 
                                                labelClassName="col-sm-3" col={8}
                                                name="contact_telephoneno" label="Contact Number" 
                                                id="contact_telephoneno" placeholder="Enter contact number"
                                                maskInput={true} inputAddOn={true} inputAddOnText="+1" 
                                                validate={[ContactNumber]} doValidate={true}/>        
                                        </div>
                                    </div>

                                </div>
                            </Form>        
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
let _EditSchoolProfile = reduxForm({
    form: 'EditSchoolProfileForm',
    asyncValidate: isValidAddress,
    asyncBlurFields: ['teacher_address'],
    onSubmitFail: handleSubmitFailed,
    onSubmit: (values, dispatch, props) => {
        //console.log(values);return;
        // const {lat, lng} = values;
        // if( !lat && !lng ) {
        //     throw new SubmissionError({teacher_address:'Invalid address'});
        //     return;
        // }
        const {_triggerSubmit} = props;
        _triggerSubmit();
        return new Promise((resolve, reject) => {
            Http.upload('edit_teacher', values)
            .then(({data}) => {
                success = data.message;
                setTimeout(() => {success=''; dispatch(push(teacherListing));},3000);
                _triggerSubmit();
                window.scrollTo(0, 0);
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
})(EditSchoolProfile);


const mapStateToProps = (state) => ({
    masterdata: state.masterdb
})
export default connect(mapStateToProps)(_EditSchoolProfile);