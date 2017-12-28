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
import '../EditTeacherDetail/EditTeacherDetail.css';
import {handleSubmitFailed} from '../../lib/Helper';
import {Required, Email, Number, Phone, maxLength4,maxLength200,maxLength400, Alphabets, isValidAddress} from '../../lib/Validate';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import {connect} from 'react-redux';

class RightPart extends Component {
    constructor() {
        super();
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.fillFormFields = this.fillFormFields.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.state = {
            success: '',
            reload: false,
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
        const { error, handleSubmit, pristine, submitting, initialValues, change, user} = this.props;
        const { success, reload, reset } = this.state;
        
        const options = [
            {value: 'male', name: 'Male'},
            {abbreviation: 'female', name: 'Female'}
        ]
		return (

            <div className="right-group">
                <div className="right-group-content activity-bg">
                    <div className="create-teacher">
                        <Form onSubmit={handleSubmit(this.formSubmit)}>
                            <div className="p-3 teacher-forms">
                                <div className="d-flex justify-content-center align-items-center">

                                    <div>
                                        <div className="text-uppercase text-center font-weight-bold teach-head">Activity</div>
                                    </div>

                                </div>
                            </div>
                        </Form>

                    </div>
                </div>
            </div>        
		) 
	}
    formSubmit(values) {
        const {user, dispatch, reset} = this.props;
        const {lat, lng} = this.state.coordinates;
        values.lat = lat;
        values.lng = lng;
        values._id = user._id;
        if( _.has(values, 'contact_telephoneno') ) {
            values.contact_telephoneno = _.replace(values.contact_telephoneno, /-|\s|\+1/g, "");
        }
        return new Promise((resolve, reject) => {
            Http.upload('addteacher', values)
            .then(({data}) => {
                this.setState({success:data.message, reload: true, reset: true});
                dispatch(reset('RightPartForm'));
                setTimeout(() => this.setState({success: ''}), 5000);
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
}
let RightPartForm = reduxForm({
    form: 'RightPartForm',
    onSubmitFail: handleSubmitFailed
})(RightPart);

const mapStateToProps = (state) => ({
    user: state.auth.user
})
export default connect(mapStateToProps)(RightPartForm);
