/* global _ */
import React, {Component} from 'react';
import {Http} from '../../lib/Http';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import Alert from '../Common/Alert';
import {Link} from 'react-router-dom';
import {teacherListing, editTeacher} from '../../lib/SiteLinks';
import {Loader} from '../Common/Loader';
import {LinkContainer} from 'react-router-bootstrap';
import './LessonPlanDetails.css';
import searcher from '../../assets/images/svg/musica-searcher.svg';
import filter from '../../assets/images/svg/filter.svg';
import ThreeDots from '../../assets/images/svg/menugray.svg';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {DropdownWithoutActiveProps} from '../partials/DropdownWithoutActiveProps';
import LessonPlanAcordian from './LessonPlanAcordian.js';
class LessonPlanDetails extends Component {
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
                                        <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">View Response</button>
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
                                        <div className="p-3 p-lg-3">
                                            <div className="lesson-detailed-boxes">

                                                {/*subject-box*/}
                                                <div className="subject-box">
                                                    <div className="drop-icons">
                                                        <DropdownWithoutActiveProps tag="li" nav="true" isOpen={toggleClass} toggle={this.toggle}>
                                                            <DropdownToggle tag="a" >
                                                                <div className="user-image">
                                                                    <img src={ThreeDots} alt="action" />
                                                                </div> 
                                                            </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <DropdownItem>Edit</DropdownItem>
                                                                <DropdownItem>Copy</DropdownItem>
                                                                <DropdownItem>Move</DropdownItem>
                                                                <DropdownItem>Delete</DropdownItem>
                                                                <DropdownItem>Response</DropdownItem>
                                                                <DropdownItem>Invite</DropdownItem>
                                                                <DropdownItem>Print</DropdownItem>
                                                                <DropdownItem>Assign</DropdownItem>
                                                            </DropdownMenu>
                                                        </DropdownWithoutActiveProps>
                                                    </div>
                                                    <div className="p-4">
                                                        <div className="form-group">
                                                            <label className="white-space-nowrap">Subject</label>
                                                            <ul className="delete-code-list">
                                                                <li className="e1">E701 <a>x</a></li>
                                                                <li className="m1">M702 <a>x</a></li>
                                                                <li className="s1">SS703 <a>x</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="lesson-theme with-lesson-details">
                                                            <div class="d-flex justify-content-start flex-wrap">
                                                                <div>
                                                                    <div className="theme-head">Theme :</div>
                                                                    <div className="theme-cont">Growing Up</div>
                                                                </div>
                                                                <div>
                                                                    <div className="theme-head">Stategy :</div>
                                                                    <div className="theme-cont">Point of view/prespective</div>
                                                                </div>
                                                                <div>
                                                                    <div className="theme-head">Subjective :</div>
                                                                    <div className="theme-cont">Reading &amp; Writing</div>
                                                                </div>
                                                                <div>
                                                                    <div className="theme-head">Standard :</div>
                                                                    <div className="theme-cont">Reading &amp; Writing</div>
                                                                </div>
                                                                <div>
                                                                    <div className="theme-head">Text :</div>
                                                                    <div className="theme-cont">The drive in movie by gray solo</div>
                                                                </div>
                                                                <div>
                                                                    <div className="theme-head">Grade Level :</div>
                                                                    <div className="theme-cont">5/6</div>
                                                                </div>
                                                                <div>
                                                                    <div className="theme-head">Objective :</div>
                                                                    <div className="theme-cont">Student increase comprehension of text by determining author’s prespetive</div>
                                                                </div>
                                                                <div>
                                                                    <div className="theme-head">Essential Question :</div>
                                                                    <div className="theme-cont">How do we respond to point of view/prespective questions?</div>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*Acordian*/}
                                                <div className="subject-acordian mt-3">
                                                    <LessonPlanAcordian />
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

export default LessonPlanDetails;