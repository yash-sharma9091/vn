/* global IMAGE_PATH */
import React, {Component} from 'react';
import { Form } from 'reactstrap';
import ImageCropper from '../Common/ImageCropper';
import FormDropdown from "../Common/FormDropdown";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {handleSubmitFailed, gender, scrollToByClassName} from '../../lib/Helper';
import {Required, Email,maxLength200, Alphabets, isValidAddress, ContactNumber} from '../../lib/Validate';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import {parentListing} from '../../lib/SiteLinks';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
let success='';

class EditParentInformation extends Component {
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
            profileImage:''
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
            change('parent_address', address[0].formatted_address);
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
        const {parent} = this.props;
        if(parent) {
            const {profile_image} = parent;
            if( profile_image ) {
                let profileImage = `${IMAGE_PATH}/${profile_image.path}`; 

                this.setState({profileImage});
            }
        }
    }
    removeImage() {
        this.setState({profileImage:''});
        this.props.change('profile_image',null);
    }
	render() {
        const { error, handleSubmit} = this.props;
        const {student_relation} = this.props.masterdata;
        const {profileImage} = this.state;
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
                                            <Field component={ImageCropper} name="image" logo={profileImage} removeImage={this.removeImage}/>
                                        </div>
                                        <div className="col-md-9 col-lg-10">
                                            <div className="form-row pl-3">
                                                <Field 
                                                    component={FormField} type="text" formGroupClassName="mr-2"
                                                    name="name" label="Name"
                                                    id="Name" placeholder="Enter name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="group-tehead">Personal Information</div>
                                <div className="p-3">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9}
                                                labelClassName="col-sm-3"
                                                name="parent_address" label="Parent Address" placesAutocomplete={true} onSelect={this.handleSelect}
                                                id="Parent_Address" placeholder="Enter address" validate={[Required]} doValidate={true}/>
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
                                            {/*<Field 
                                                component={FormDropdown} 
                                                formGroupClassName="row" name="relation"
                                                label="Relation "  colWrapper={true} col={9}
                                                data={student_relation} placeholder="Select health info"
                                                valueField={"_id"} textField={"name"}
                                                labelClassName="col-sm-3"/>*/}
                                            <Field 
                                                component={FormSelect} 
                                                formGroupClassName="row" name="gender" type="select" 
                                                emptyText="Select gender" label="Gender" options={gender}
                                                labelClassName="col-sm-3" colWrapper={true} col={9}
                                                displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>   
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
let _EditParentInformation = reduxForm({
    form: 'EditParentInformationForm',
    asyncValidate: isValidAddress,
    asyncBlurFields: ['parent_address'],
    onSubmitFail: handleSubmitFailed,
    onSubmit: (values, dispatch, props) => {
        //console.log(values);return;
        // const {lat, lng} = values;
        // if( !lat && !lng ) {
        //     throw new SubmissionError({parent_address:'Invalid address'});
        //     return;
        // }
        const {_triggerSubmit} = props;
        _triggerSubmit();
        return new Promise((resolve, reject) => {
            Http.upload('edit_parent', values)
            .then(({data}) => {
                success = data.message;
                setTimeout(() => {success=''; dispatch(push(parentListing));},3000);
                _triggerSubmit();
                scrollToByClassName('left-group-content');
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
})(EditParentInformation);
const mapStateToProps = (state) => ({
    masterdata: state.masterdb
})


export default connect(mapStateToProps)(_EditParentInformation);