import React, {Component} from 'react';
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
                               <span> 120 </span>
                            </div>
                            <h5>Teachers In</h5>
                            <button className="btn btn-info"> View All</button>
                            <a href="">Add Teachers</a>
                        </div>


                        <div className="profile-complete-percentage-box-1">
                            <div className="stud-teach-in">
                               <span> 440 </span>
                            </div>
                            <h5>Students In</h5>
                            <button className="btn btn-info"> View All</button>
                            <a href="">Add Students</a>
                        </div>
                    </div>
                </div>
            </div>        
		) 
	}
}
export default SchoolProfileProgress;
