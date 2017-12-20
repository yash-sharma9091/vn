/* global _ */
import React, {Component} from 'react';
import ViewSchoolProfileInfo from './ViewSchoolProfileInfo';
import EditSchoolProfile from './EditSchoolProfile';
import SchoolProfileActivity from './SchoolProfileActivity.js';
import './SchoolProfile.css';
import {Http} from '../../lib/Http';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import Alert from '../Common/Alert';
import { editSchoolProfile, schoolProfile} from '../../lib/SiteLinks';
import {Loader} from '../Common/Loader';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import { submit } from 'redux-form';
class SchoolProfile extends Component {
    constructor() {
        super();
        this.triggerSubmit = this.triggerSubmit.bind(this);
        this.triggerRefresh = this.triggerRefresh.bind(this);
        this.state = {
            school: {},
            errors:'',
            isLoading: false,
            refresh: false,
            submitting: false
        }
    }
    triggerSubmit() {
        this.setState({submitting: !this.state.submitting});
    }
    triggerRefresh() {
        this.setState({refresh: true});
        setTimeout(() => this.setState({refresh: true}), 1500);
    }
    componentWillReceiveProps(newProps) {
        if( this.state.refresh ){
            this.fetchProfile(newProps);
        }
    }
    componentDidMount() {
        this.fetchProfile(this.props);        
    }
    fetchProfile(props) {
        const {id} = props.match.params;
        if( id ) {
            this.setState({isLoading: true});
            Http.get(`getschoolprofile_step?_id=${id}`)
            .then(({data}) => this.setState({school: data, isLoading: false}))
            .catch(({errors}) => {
                this.setState({errors: errors.message, isLoading: false});
                setTimeout(() => this.setState({errors: ''}), 5000);
            });
        }
    }
	render() {
        const {school, errors, isLoading, submitting} = this.state;
        const {dispatch, location} = this.props;
        const {pathname} = location;
        
		return (
            <div>

                {/*dashboard-part*/}
                <div className="dashboard-part">
                    <Alert alertVisible={errors} alertMsg={errors} className={errors ? "danger alert-box":"success"}/>
                    <div className="dashboard-search-part inner-sub-page">

                        {/*Search-Bar*/}
                        <div className="search-bar">
                            <div className="d-flex justify-content-between p-2 no-gutters">
                                <div className="col-5 col-md-5 col-lg-4 col-xl-4">
                                    <div className="d-flex justify-content-start">
                                        <div className="breadcrumb-list">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a>School Profile</a></li>
                                                
                                            </ol>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-7 col-md-7 col-lg-8 col-xl-8">
                                    {
                                        decorateLink(pathname) === decorateLink(schoolProfile) 
                                        ? (
                                            <div className="imports-button d-flex justify-content-end">
                                                <LinkContainer to={`${decorateLink(editSchoolProfile)}/${school._id}`}>
                                                <button type="button" className="btn btn-primary ml-1 ml-lg-1 ml-xl-2">Edit</button>
                                                </LinkContainer>    
                                            </div>    
                                        ) : null
                                    }
                                    {
                                        decorateLink(pathname) === decorateLink(editSchoolProfile) 
                                        ? (
                                            <div className="imports-button d-flex justify-content-end">
                                                <button 
                                                    type="button" 
                                                    disabled={submitting}
                                                    onClick={() => dispatch(submit('EditSchoolProfileForm'))} 
                                                    className="btn btn-primary ml-1 ml-lg-1 ml-xl-2">{submitting ? 'Processing ...' : 'Update'}
                                                </button>    
                                                <LinkContainer to={`${decorateLink(schoolProfile)}/${school._id}`}>
                                                    <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Cancel</button>
                                                </LinkContainer> 
                                            </div>    
                                        ) : null
                                    } 
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Dashboard-Main*/}

                    <div className="dashboard-main inner-sub-page">
                            <div className="dash-left-box">
                                { isLoading && <Loader /> }
                                {!isLoading && !_.isEmpty(school) && decorateLink(pathname) === decorateLink(schoolProfile) && <ViewSchoolProfileInfo school={school}/>}
                                {!isLoading && 
                                !_.isEmpty(school) && 
                                decorateLink(pathname) === decorateLink(editSchoolProfile) && 
                                <EditSchoolProfile 
                                    refresh={this.triggerRefresh} 
                                    _triggerSubmit={this.triggerSubmit} 
                                    school={school} 
                                    initialValues={school}/>
                                }
                            </div>
                            <div className="dash-right-box">
                                <SchoolProfileActivity school={school}/>
                            </div>
                    </div>
                
                </div>

            </div>
		) 
	}
}


export default connect()(SchoolProfile);