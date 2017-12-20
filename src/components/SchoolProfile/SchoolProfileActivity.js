import React, {Component} from 'react';
import {teacherListing, studentListing} from '../../lib/SiteLinks';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
class SchoolProfileProgress extends Component {
	render() {
       const {school} = this.props;
		return (

            <div className="right-group">
                <div className="right-group-content activity-bg">
                    <div className="create-teacher">
                        <div className="p-3 teacher-forms">
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <div className="text-uppercase text-center font-weight-bold teach-head">complete your profile</div>
                                </div>
                            </div>
                        </div>
                    </div>
                  

                    <div className="profile-complete-percentage">       
                        <div className="profile-complete-percentage-box-1">   
                            <div className="profile-box-percentage">     
                                <div className="profile-box">
                                    <span style={{bottom: `${school.profile_percentage || '0'}%`}}></span>
                                </div>
                                <span className="percentage-line">{school.profile_percentage || '0'}% Complete</span>
                            </div>
                        </div>

                    
                        <div className="profile-complete-percentage-box-1">  
                            <div className="stud-teach-in">
                               <span> {school.teacher_count} </span>
                            </div>
                            <h5>Teachers In</h5>
                            <div className="imports-button">
                                <LinkContainer to={teacherListing}>
                                    <button type="button" className="btn btn-info"> View All</button>
                                </LinkContainer>    
                            </div>
                            <Link to={`${teacherListing}?toggleClass=active`}>Add Teachers</Link>
                        </div>


                        <div className="profile-complete-percentage-box-1">
                            <div className="stud-teach-in">
                               <span> {school.student_count} </span>
                            </div>
                            <h5>Students In</h5>
                            <div className="imports-button">
                                <LinkContainer to={studentListing}>
                                    <button type="button" className="btn btn-info"> View All</button>
                                </LinkContainer>    
                            </div>
                            <Link to={`${studentListing}?toggleClass=active`}>Add Students</Link>
                        </div>
                    </div>
                </div>
            </div>        
		) 
	}
}
export default SchoolProfileProgress;