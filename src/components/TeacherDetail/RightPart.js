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
import './TeacherDetail.css';
import {handleSubmitFailed} from '../../lib/Helper';
import {Required, Email, Number, Phone, maxLength4,maxLength200,maxLength400, Alphabets, isValidAddress} from '../../lib/Validate';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import {connect} from 'react-redux';
import activeImg1 from '../../assets/images/act-img-1.png';
import activeImg2 from '../../assets/images/act-img-2.png';

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
                <div className="right-group-content">
                    <div className="create-teacher">
                        <div className="p-3 teacher-forms">
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <div className="text-uppercase text-center font-weight-bold teach-head">Activity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 activity-date">November 14, 2017 </div>
                    <div className="now-activity-list p-3">
                        <div class="media">
                            <img class="mr-3" src={activeImg1} alt="activeImg1" />
                            <div class="media-body">
                                <h5 class="mt-0 activity-heading"><black>James B</black> has answered the question for <blue>Do now activity</blue> on Oct 10th of Lesson Tuesday</h5>
                                <div className="activity-questiobox">
                                    <h3>Question 1 : What is the full form of WHO?</h3>
                                    <h4>Full form WHO is________</h4>
                                    <h5>Oct 10. 2017</h5>
                                </div>
                                <div className="write-comment"><a>Write Comment</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="now-activity-list p-3">
                        <div class="media">
                            <img class="mr-3" src={activeImg2} alt="activeImg1" />
                            <div class="media-body">
                                <h5 class="mt-0 activity-heading"><black>Mark C</black> has answered the question for <blue>Do now activity</blue> on Oct 10th of Lesson Tuesday</h5>
                                <div className="activity-questiobox">
                                    <h3>Question 1 : Select Apple Picture</h3>
                                    <h4>A Option</h4>
                                    <h5>Oct 10. 2017</h5>
                                </div>
                                <Field component={FormField} type="textarea" name="" label="" id="studentClass" placeholder="Write your comment here" labelClassName="gradient-color" rows="3" validate={maxLength400} doValidate={true} />
                                <button type="button" className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="now-activity-list p-3">
                        <div class="media">
                            <img class="mr-3" src={activeImg1} alt="activeImg1" />
                            <div class="media-body">
                                <h5 class="mt-0 activity-heading"><black>James B</black> has answered the question for <blue>Do now activity</blue> on Oct 10th of Lesson Tuesday</h5>
                                <div className="activity-questiobox">
                                    <h3>Question 1 : What is the full form of WHO?</h3>
                                    <h4>Full form WHO is________</h4>
                                    <h5>Oct 10. 2017</h5>
                                </div>
                                <div className="write-comment"><a>Write Comment</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="now-activity-list p-3">
                        <div class="media">
                            <img class="mr-3" src={activeImg2} alt="activeImg1" />
                            <div class="media-body">
                                <h5 class="mt-0 activity-heading"><black>Mark C</black> has answered the question for <blue>Do now activity</blue> on Oct 10th of Lesson Tuesday</h5>
                                <div className="activity-questiobox">
                                    <h3>Question 1 : Select Apple Picture</h3>
                                    <h4>A Option</h4>
                                    <h5>Oct 10. 2017</h5>
                                </div>
                                <Field component={FormField} type="textarea" name="" label="" id="studentClass" placeholder="Write your comment here" labelClassName="gradient-color" rows="3" validate={maxLength400} doValidate={true} />
                                <button type="button" className="btn btn-primary">Send</button>
                            </div>
                        </div>
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
