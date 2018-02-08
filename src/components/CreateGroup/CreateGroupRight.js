/* global _ */
import React, {Component} from 'react';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Form } from 'reactstrap';
import ImageCropper from '../Common/ImageCropper';
import './CreateGroup.css';
import {handleSubmitFailed, gender} from '../../lib/Helper';
import {Required, Phone, Email,maxLength200, Alphabets, isValidAddress, ContactNumber} from '../../lib/Validate';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import {connect} from 'react-redux';
import { FormCombobox } from '../Common/FormCombobox';

class RightPart extends Component {
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
        dispatch(reset('RightPartForm'));
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
	render() {
        const { error, handleSubmit, pristine, submitting, toggleForm} = this.props;
        const { success, reset } = this.state;
        
        
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
                                        <div className="text-uppercase font-weight-bold teach-head">Add TEACHER</div>
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

                                <div className="tabs-heading text-uppercase font-weight-bold">Group</div>
                                <div className="form-row ml-1 mb-4">
                                    <Field component={ImageCropper} name="image" reset={reset}/>
                                </div>

                                <div className="form-row">
                                    <Field 
                                        component={FormField} type="text" formGroupClassName="col-md-12 col-lg-12"
                                        name="enter_group_name" label="Enter group name" placesAutocomplete={true} onSelect={this.handleSelect}
                                        id="enter_group_name" placeholder="Enter group name" validate={[Required]} doValidate={true}/>
                                    
                                </div>

                                <div className="form-row">
                                    <Field 
                                        component={FormSelect} formGroupClassName="col-md-12 col-lg-12" name="Class" type="select" 
                                        emptyText="Select Class" label="Class" options={gender}
                                        displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>

                                    <Field 
                                        component={FormSelect} formGroupClassName="col-md-12 col-lg-12" name="Code" type="select" 
                                        emptyText="Select Code" label="Code" options={gender}
                                        displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>
                                    <Field 
                                        component={FormCombobox} formGroupClassName="col-md-12 col-lg-12" name="Code" type="select" 
                                        emptyText="Select Code" label="Code" data={[{name: 'test', value:'Amit'}]}
                                        displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>    
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
            throw new SubmissionError({teacher_address:'Invalid address'});
            return;
        }
        values.lat = lat;
        values.lng = lng;
        values._id = user._id;
        if( _.has(values, 'contact_telephoneno') ) {
            values.contact_telephoneno = _.replace(values.contact_telephoneno, /-|\s|\+1/g, "");
        }
        //console.log(values);
        return new Promise((resolve, reject) => {
            Http.upload('addteacher', values)
            .then(({data}) => {
                this.setState({success:data.message, reset: true});
                dispatch(reset('RightPartForm'));
                setTimeout(() => this.setState({success: '', reset: false}), 5000);
                window.scrollTo(0, 0);
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
let RightPartForm = reduxForm({
    form: 'RightPartForm',
    asyncValidate: isValidAddress,
    asyncBlurFields: ['teacher_address'],
    onSubmitFail: handleSubmitFailed
})(RightPart);

const mapStateToProps = (state) => ({
    user: state.auth.user
})
export default connect(mapStateToProps)(RightPartForm);
