/* global _ */
import React, {Component} from 'react';
import ViewSchoolProfileInfo from './ViewSchoolProfileInfo';
import EditSchoolProfile from './EditSchoolProfile';
import SchoolProfileActivity from './SchoolProfileActivity.js';
import './SchoolProfile.css';
import {Http} from '../../lib/Http';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import Alert from '../Common/Alert';
import { editTeacher} from '../../lib/SiteLinks';
import {Loader} from '../Common/Loader';
import {LinkContainer} from 'react-router-bootstrap';
class AddTeachers extends Component {
    constructor() {
        super();
        this.triggerSubmit = this.triggerSubmit.bind(this);
        this.state = {
            school: {},
            errors:'',
            isLoading: false,
            submitting: false
        }
    }
    triggerSubmit() {
        this.setState({submitting: !this.state.submitting});
    }
    componentDidMount() {
        
        const {match} = this.props;
        const {id} = match.params;
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
                                    <div className="imports-button d-flex justify-content-end">
                                        <LinkContainer to={`${decorateLink(editTeacher)}/${school._id}`}>
                                            <button type="button" className="btn btn-primary ml-1 ml-lg-1 ml-xl-2">Edit</button>
                                        </LinkContainer>        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Dashboard-Main*/}

                    <div className="dashboard-main inner-sub-page">
                            <div className="dash-left-box">
                                { isLoading && <Loader /> }
                                {/*!isLoading && !_.isEmpty(school) && <ViewSchoolProfileInfo school={school}/>*/}
                                {!isLoading && !_.isEmpty(school) && <EditSchoolProfile _triggerSubmit={this.triggerSubmit} school={school} initialValues={school}/>}
                            </div>
                            <div className="dash-right-box">
                                <SchoolProfileActivity />
                            </div>
                    </div>
                
                </div>

            </div>
		) 
	}
}

export default AddTeachers;