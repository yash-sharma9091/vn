/* global _ */
import React, {Component} from 'react';
import {Http} from '../../lib/Http';
import {fullName, limitTo, decorateLink} from '../../lib/Helper';
import Alert from '../Common/Alert';
import {Link} from 'react-router-dom';
import {teacherListing, editTeacher} from '../../lib/SiteLinks';
import {Loader} from '../Common/Loader';
import {LinkContainer} from 'react-router-bootstrap';
import './LessonPlanList.css';
import searcher from '../../assets/images/svg/musica-searcher.svg';
import filter from '../../assets/images/svg/filter.svg';
import personOne from '../../assets/images/person_1.png';
import personTwo from '../../assets/images/person_2.png';
import personThree from '../../assets/images/person_3.png';
import ThreeDots from '../../assets/images/svg/menugray.svg';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {DropdownWithoutActiveProps} from '../partials/DropdownWithoutActiveProps';
class LessonPlanList extends Component {
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
                                    <div className="p-3 p-lg-3">
                                        <div className="d-flex justify-content-between flex-wrap align-items-stretch align-content-around lesson-plan-listing">
                                            <div>

                                                <div className="d-flex justify-content-between align-items-center my-lesson-plans mb-1">
                                                    <div><h2>My Lesson Plans</h2></div>
                                                    <div><a>+ Add New Lesson Plans</a></div>
                                                </div>

                                                {/*lesson-box*/}
                                                <div className="lesson-box">
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
                                                    {/* <a className="drop-icons"><div><img src={ThreeDots} alt="action" /></div></a> */}
                                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                                        <div className="date">Date of Lesson Plan 25/09/2017</div>
                                                        <div className="num-student-box pr-3 text-right">
                                                            <ul className="num-student-pic">
                                                                <li><img src={personOne} alt="" /></li>
                                                                <li><img src={personTwo} alt="" /></li>
                                                                <li><img src={personThree} alt="" /></li>
                                                            </ul>
                                                            <div className="num-student">+20 Student</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-stretch lesson-details-box">
                                                        <div className="cyan-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Time</div>
                                                            <div className="minutes cyan-color">50 Min.</div>
                                                        </div>
                                                        <div className="pink-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Total Marks</div>
                                                            <div className="minutes pink-color">30 Points</div>
                                                        </div>
                                                        <div className="yellow-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Total Answered</div>
                                                            <div className="minutes yellow-color">20</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*lesson-box*/}
                                                <div className="lesson-box">
                                                    <a className="drop-icons"><div><img src={ThreeDots} alt="action" /></div></a>
                                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                                        <div className="date">Date of Lesson Plan 25/09/2017</div>
                                                        <div className="num-student-box pr-3 text-right">
                                                            <ul className="num-student-pic">
                                                                <li><img src={personOne} alt="" /></li>
                                                                <li><img src={personTwo} alt="" /></li>
                                                                <li><img src={personThree} alt="" /></li>
                                                            </ul>
                                                            <div className="num-student">+50 Student</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-stretch lesson-details-box">
                                                        <div className="cyan-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Time</div>
                                                            <div className="minutes cyan-color text-right">50 Min.</div>
                                                        </div>
                                                        <div className="pink-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Total Marks</div>
                                                            <div className="minutes pink-color text-right">30 Points</div>
                                                        </div>
                                                        <div className="yellow-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Total Answered</div>
                                                            <div className="minutes yellow-color text-right">20</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*lesson-box*/}
                                                <div className="lesson-box">
                                                    <a className="drop-icons"><div><img src={ThreeDots} alt="action" /></div></a>
                                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                                        <div className="date">Reading &amp; Writing</div>
                                                        <div className="num-student-box pr-3 text-right">
                                                            <ul className="num-student-pic">
                                                                <li><img src={personOne} alt="" /></li>
                                                                <li><img src={personTwo} alt="" /></li>
                                                                <li><img src={personThree} alt="" /></li>
                                                            </ul>
                                                            <div className="num-student">+50 Student</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-stretch lesson-details-box">
                                                        <div className="cyan-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Time</div>
                                                            <div className="minutes cyan-color text-right">50 Min.</div>
                                                        </div>
                                                        <div className="pink-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Total Marks</div>
                                                            <div className="minutes pink-color text-right">30 Points</div>
                                                        </div>
                                                        <div className="yellow-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Total Answered</div>
                                                            <div className="minutes yellow-color text-right">20</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div>
                                                <div className="d-flex justify-content-between align-items-center my-lesson-plans mb-1">
                                                    <div><h2>Completed Lesson</h2></div>
                                                </div>

                                                {/*lesson-box*/}
                                                <div className="lesson-box">
                                                    <a className="drop-icons"><div><img src={ThreeDots} alt="action" /></div></a>
                                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                                        <div className="date">Reading &amp; Writing</div>
                                                        <div className="num-student-box pr-3 text-right">
                                                            <ul className="num-student-pic">
                                                                <li><img src={personOne} alt="" /></li>
                                                                <li><img src={personTwo} alt="" /></li>
                                                                <li><img src={personThree} alt="" /></li>
                                                            </ul>
                                                            <div className="num-student">+20 Student</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-stretch lesson-details-box">
                                                        <div className="cyan-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Time</div>
                                                            <div className="minutes cyan-color">50 Min.</div>
                                                        </div>
                                                        <div className="pink-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Total Marks</div>
                                                            <div className="minutes pink-color">30 Points</div>
                                                        </div>
                                                        <div className="yellow-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Total Answered</div>
                                                            <div className="minutes yellow-color">20</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div>
                                                <div className="d-flex justify-content-between align-items-center my-lesson-plans mb-1">
                                                    <div><h2>In-Progress Lesson</h2></div>
                                                </div>

                                                {/*lesson-box*/}
                                                <div className="lesson-box">
                                                    <a className="drop-icons"><div><img src={ThreeDots} alt="action" /></div></a>
                                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                                        <div className="date">Reading &amp; Writing</div>
                                                        <div className="num-student-box pr-3 text-right">
                                                            <ul className="num-student-pic">
                                                                <li><img src={personOne} alt="" /></li>
                                                                <li><img src={personTwo} alt="" /></li>
                                                                <li><img src={personThree} alt="" /></li>
                                                            </ul>
                                                            <div className="num-student">+20 Student</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-stretch lesson-details-box">
                                                        <div className="cyan-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Time</div>
                                                            <div className="minutes cyan-color">50 Min.</div>
                                                        </div>
                                                        <div className="pink-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Total Marks</div>
                                                            <div className="minutes pink-color">30 Points</div>
                                                        </div>
                                                        <div className="yellow-bg d-flex justify-content-between align-items-center p-3">
                                                            <div className="times">Total Answered</div>
                                                            <div className="minutes yellow-color">20</div>
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

            </div>
		) 
	}
}

export default LessonPlanList;