/* global _ */
import React, {Component} from 'react';
import searcher from '../../assets/images/svg/musica-searcher.svg';
import filter from '../../assets/images/svg/filter.svg';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import EditStudentInformation from './EditStudentInformation';
import ActivityPanel from './ActivityPanel';
import './EditStudentDetail.css';
import {Http} from '../../lib/Http';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import Alert from '../Common/Alert';
import {Link} from 'react-router-dom';
import {teacherListing, teacherDetail} from '../../lib/SiteLinks';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import {LinkContainer} from 'react-router-bootstrap';
import {Loader} from '../Common/Loader';

class AddTeachers extends Component {
    constructor() {
        super();
        this.state = {
            teacher: {},
            errors:'',
            isLoading: false
        }
    }
    componentDidMount() {
        
        const {match} = this.props;
        const {id} = match.params;
        if( id ) {
            this.setState({isLoading: true});
            Http.get(`view_teacher?_id=${id}`)
            .then(({data}) => this.setState({teacher: data, isLoading: false}))
            .catch(({errors}) => {
                this.setState({errors: errors.message, isLoading: true});
                setTimeout(() => this.setState({errors: ''}), 5000);
            });
        }
    }
	render() {
        const {teacher, errors, isLoading} = this.state;
        const {dispatch} = this.props;
        
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
                                                <li className="breadcrumb-item"><Link to={teacherListing}>Student</Link></li>
                                                <li className="breadcrumb-item text-capitalize"><Link to={`${decorateLink(teacherDetail)}/${teacher._id}`}>{teacher.first_name ? limitTo(fullName(teacher.first_name, teacher.last_name),50) : 'Loading ...'}</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Edit</li>
                                            </ol>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-7 col-md-7 col-lg-8 col-xl-8">
                                    <div className="imports-button d-flex justify-content-end">
                                        <button type="button" onClick={() => dispatch(submit('EditTeacherInformationForm'))} className="btn btn-primary ml-1 ml-lg-1 ml-xl-2">Update</button>
                                        <LinkContainer to={teacherListing}>
                                            <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Cancel</button>
                                        </LinkContainer>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Dashboard-Main*/}

                    <div className="dashboard-main inner-sub-page">
                        <div className="dash-left-box">
                             <EditStudentInformation teacher={teacher} />
                        </div>
                        <div className="dash-right-box">
                            <ActivityPanel />
                        </div>
                    </div>
                
                </div>

            </div>
		) 
	}
}

export default connect()(AddTeachers);