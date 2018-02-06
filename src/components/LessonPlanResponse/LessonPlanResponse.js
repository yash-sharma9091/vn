/* global _ */
import React, {Component} from 'react';
import {Http} from '../../lib/Http';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import Alert from '../Common/Alert';
import {Link} from 'react-router-dom';
import {teacherListing, editTeacher} from '../../lib/SiteLinks';
import {Loader} from '../Common/Loader';
import {LinkContainer} from 'react-router-bootstrap';
import './LessonPlanResponse.css';
import LessonPlanTabs from './LessonPlanTabs.js';
import searcher from '../../assets/images/svg/musica-searcher.svg';
import filter from '../../assets/images/svg/filter.svg';
import personImg from '../../assets/images/lesson-plan-person.png';
class LessonPlanResponse extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            teacher: {},
            errors:'',
            isLoading: false,
            toggleClass: false
        }
    }
    toggleFilter() {
        this.setState({toggleFilter: !this.state.toggleFilter});
    }
    toggle() {
        console.log('click')
        this.setState({toggleClass: !this.state.toggleClass});
    }
    componentDidMount() {
        const {location} = this.props;
        if( location ) { 
            let isToogle = new URLSearchParams(location.search).get('toggleClass');
            if( isToogle === 'active' ) {
                this.setState({toggleClass: true});
            }
        }    
        const {match} = this.props;
        const {id} = match.params;
        if( id ) {
            this.setState({isLoading: true});
            Http.get(`view_teacher?_id=${id}`)
            .then(({data}) => this.setState({teacher: data, isLoading: false}))
            .catch(({errors}) => {
                this.setState({errors: errors.message, isLoading: false});
                setTimeout(() => this.setState({errors: ''}), 5000);
            });
        }
    }
	render() {
        const {teacher, errors, isLoading,dropdownToggle, toggle, toggleClass} = this.state;
		return (
            <div>

                {/*dashboard-part*/}
                <div className="dashboard-part">
                    <Alert alertVisible={errors} alertMsg={errors} className={errors ? "danger alert-box":"success"}/>
                    <div className="dashboard-search-part">

                        {/*Search-Bar*/}
                        <div className="search-bar">
                            <div className="d-flex justify-content-between p-2 no-gutters">
                                <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                    <div className="d-flex justify-content-start">
                                        <div className="search-head">Lesson Plans</div>
                                    </div>

                                </div>

                                <div className="col-5 col-md-5 col-lg-6 col-xl-6">
                                    <div className="d-flex justify-content-center">
                                        <div className="input-group mr-2">
                                            <input type="text" className="form-control" placeholder="Search by name, email, phone number" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span className="input-group-addon" id="basic-addon2"><img className="filter-icon" src={searcher} alt="" /></span>
                                        </div>
                                        <button type="button" className="btn btn-secondary filter-btn" onClick={this.toggleFilter}>
                                            <img className="filter-icon" src={filter} alt="" />
                                        </button>
                                    </div>

                                </div>

                                <div className="col-4 col-md-4 col-lg-3 col-xl-3">
                                    <div className="imports-button d-flex justify-content-end">
                                        <button type="button" className="btn btn-primary ml-1 ml-lg-1 ml-xl-2">Create</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/*Dashboard-Main*/}

                    <div className="dashboard-main">
                        <div className="dash-left-box">
                            <div className="left-group">
                                <div className="left-group-content">
                                    <div class="container">
                                        <div className="">
                                            <div className="lesson-detailed-boxes">
                                            
                                            <div className="row no-gutters">
                                                <div className="col-sm-3">
                                                    <div className="search-student-main-box p-3">
                                                        <div className="search-student-box">
                                                            <input name="text" placeholder="Search Student" class="form-control" type="text" />
                                                            <div className="search-btn"><img class="filter-icon" src="/static/media/musica-searcher.ee2cdecd.svg" alt="" /></div>
                                                        </div>
                                                        <div className="student-list pt-2 pb-2">
                                                            <ul>
                                                                <li>
                                                                    <div className="person-image"><img src={personImg} alt="" /></div>
                                                                    <h2>Andrew Kozak</h2>
                                                                    <span>Class 602</span>
                                                                </li>
                                                                <li>
                                                                    <div className="person-image"><img src={personImg} alt="" /></div>
                                                                    <h2>Andrew Kozak</h2>
                                                                    <span>Class 602</span>
                                                                </li>
                                                                <li>
                                                                    <div className="person-image"><img src={personImg} alt="" /></div>
                                                                    <h2>Andrew Kozak</h2>
                                                                    <span>Class 602</span>
                                                                </li>
                                                                <li>
                                                                    <div className="person-image"><img src={personImg} alt="" /></div>
                                                                    <h2>Andrew Kozak</h2>
                                                                    <span>Class 602</span>
                                                                </li>
                                                                <li>
                                                                    <div className="person-image"><img src={personImg} alt="" /></div>
                                                                    <h2>Andrew Kozak</h2>
                                                                    <span>Class 602</span>
                                                                </li>
                                                                <li>
                                                                    <div className="person-image"><img src={personImg} alt="" /></div>
                                                                    <h2>Andrew Kozak</h2>
                                                                    <span>Class 602</span>
                                                                </li>
                                                                <li>
                                                                    <div className="person-image"><img src={personImg} alt="" /></div>
                                                                    <h2>Andrew Kozak</h2>
                                                                    <span>Class 602</span>
                                                                </li>
                                                                <li>
                                                                    <div className="person-image"><img src={personImg} alt="" /></div>
                                                                    <h2>Andrew Kozak</h2>
                                                                    <span>Class 602</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <LessonPlanTabs />
                                                </div>
                                            </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                
                </div>

            </div>
		) 
	}
}

export default LessonPlanResponse;