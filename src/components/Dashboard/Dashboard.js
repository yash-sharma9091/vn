import React, {Component} from 'react';
import dashImg1 from '../../assets/images/dash-1.png';
import dashImg2 from '../../assets/images/dash-2.png';
import dashImg3 from '../../assets/images/dash-3.png';
import dashImg4 from '../../assets/images/dash-4.png';
import dashImg5 from '../../assets/images/dash-5.png';
import dashImg6 from '../../assets/images/dash-6.png';
import dashImg7 from '../../assets/images/dash-7.png';
import dashImg8 from '../../assets/images/dash-8.png';
import dashImg9 from '../../assets/images/dash-9.png';
import dashImg10 from '../../assets/images/dash-10.png';
import paid from '../../assets/images/paid.png';
import './SchoolAdminDashboard.css';
import dashboardBg from '../../assets/images/dashboard-bg.png';
import {loadImage} from '../../lib/Helper';
import {teacherListing} from '../../lib/SiteLinks';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			dashboardBg: {}
		}
	}
	componentDidMount()  {
		loadImage(dashboardBg)
		.then(res => {
			let dashboardBg = {backgroundImage: 'url(' + res + ')'}
			this.setState({dashboardBg});
		});
		
	}
	render() {
		const {dashboardBg} = this.state;
		return (
			<div className="school-dashboard d-flex align-items-center" style={dashboardBg}>
					<button type="button" className="activity-btn">Activity</button>

					<div className="activity-box">
						<div className="activity-head">
							Activity
						</div>
					</div>

					<div className="row justify-content-md-center col-sm-12 no-gutters">
						<div className="col-8 col-md-10 col-lg-8 col-xl-5 admin-box pt-5 pb-5 pl-2 pr-2">
							<div className="d-flex flex-wrap align-content-around no-gutters">
								<div className="col-2">
									<div className="dash-box">
										<a>
											<div className="dash-icon">
												<img src={dashImg1} className="transition" alt="" />
											</div>
											<span>Dashboard</span>
										</a>
									</div>
								</div>
								<div className="col-2">
									<div className="dash-box">
										<a>
											<div className="dash-icon">
												<img src={dashImg2} className="transition" alt="" />
											</div>
											<span>School Profile</span>
										</a>
									</div>
								</div>
								<div className="col-2">
									<div className="dash-box">
										<Link to={teacherListing}>
											<div className="dash-icon"><img src={dashImg3} className="transition" alt="Teacher Listing" /></div><span>Teachers</span>
										</Link>
									</div>
								</div>
								<div className="col-2">
									<div className="dash-box">
										<a><div className="dash-icon"><img src={dashImg4} className="transition" alt="" /></div><span>Students</span></a>
									</div>
								</div>
								<div className="col-2">
									<div className="dash-box">
										<a><div className="dash-icon"><img src={dashImg5} className="transition" alt="" /></div><span>Class &amp; Subjects</span></a>
									</div>
								</div>
								<div className="col-2">
									<div className="dash-box">
										<a>
											<div className="dash-icon">
												<img src={dashImg6} className="transition" alt="" />
											</div>
										<span>Message System</span></a>
									</div>
								</div>
								<div className="col-2 pt-4">
									<div className="dash-box">
										<a><div className="dash-icon"><img src={dashImg7} className="transition" alt="" /></div><span>Assesment</span></a>
									</div>
								</div>
								<div className="col-2 pt-4">
									<div className="dash-box">
										<a><div className="dash-icon"><img src={dashImg8} className="transition" alt="" /></div><span>View Reports</span></a>
									</div>
								</div>
								<div className="col-2 pt-4">
									<div className="dash-box">
										<a><div className="dash-icon"><img src={dashImg9} className="transition" alt="" /></div><span>Calendar</span></a>
									</div>
								</div>
								<div className="col-2 pt-4">
									<div className="dash-box">
										<a><div className="dash-icon"><img src={dashImg10} className="transition" alt="" /></div><span>Contacts</span></a>
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>
		) 
	}
}

export default Dashboard;