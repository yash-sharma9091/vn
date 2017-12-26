/* global _ */
import React, {Component} from 'react';
import ViewStudentInfo from './ViewStudentInfo';
import ActivityPanel from '../Activity/ActivityPanel.js';
import './StudentDetail.css';
import {Http} from '../../lib/Http';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import Alert from '../Common/Alert';
import {Link} from 'react-router-dom';
import {studentListing, editStudent} from '../../lib/SiteLinks';
import {Loader} from '../Common/Loader';
import {LinkContainer} from 'react-router-bootstrap';
class AddTeachers extends Component {
    constructor() {
        super();
        this.fetchInfo = this.fetchInfo.bind(this);
        this.state = {
            student: {},
            errors:'',
            isLoading: false
        }
    }
    componentDidMount() {
        this.fetchInfo();
    }
    fetchInfo(props) {
        const {match} = this.props;
        const {id} = match.params;
        if( id ) {
            this.setState({isLoading: true});
            Http.get(`view_student?_id=${id}`)
            .then(({data}) => this.setState({student: data, isLoading: false}))
            .catch(({errors}) => {
                this.setState({errors: errors.message, isLoading: false});
                setTimeout(() => this.setState({errors: ''}), 5000);
            });
        }
    }
	render() {
        const {student, errors, isLoading} = this.state;
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
                                                <li className="breadcrumb-item"><Link to={studentListing}>Students</Link></li>
                                                <li className="breadcrumb-item active text-capitalize">{student.first_name ? limitTo(fullName(student.first_name, student.last_name),50) : 'Loading ...'}</li>
                                            </ol>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-7 col-md-7 col-lg-8 col-xl-8">
                                    <div className="imports-button d-flex justify-content-end">
                                        <LinkContainer to={`${decorateLink(editStudent)}/${student._id}`}>
                                            <button type="button" className="btn btn-primary ml-1 ml-lg-1 ml-xl-2">Edit</button>
                                        </LinkContainer>    
                                        {/*<LinkContainer to={`${studentListing}?toggleClass=active`}>
                                            <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Create</button>
                                         </LinkContainer>      */} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Dashboard-Main*/}

                    <div className="dashboard-main inner-sub-page">
                            <div className="dash-left-box">
                                
                                 
                                { isLoading && <Loader /> }
                                { !isLoading && !_.isEmpty(student) && <ViewStudentInfo refreshInfo={this.fetchInfo} student={student}/>  }
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

export default AddTeachers;