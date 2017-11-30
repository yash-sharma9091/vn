import React, {Component} from 'react';
import teacherImage from '../../assets/images/teacher.png';
class TeachersList extends Component {
	render() {
		return (
			<div className="mb-4">
				<div className="teacher-details">
					<div className="d-flex flex-row pt-3 pb-3">
						<div className="col-sm-4 border-right">
						    <div className="d-flex flex-row no-gutters">
								<div className="col-sm-3">
									<div className="te-img">
										<img src={teacherImage} alt="" />
									</div>
								</div>
								<div className="col-sm-9">
								    <div className="te-name">Antoine Langlais</div>
									<div className="te-gender">Male</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4 border-right">
							<div className="d-flex flex-row no-gutters">
								<div className="col-sm-5 te-head">Grades</div>
								<div className="col-sm-7 te-content">E 201</div>
							</div>
							<div className="d-flex flex-row no-gutters">
								<div className="col-sm-5 te-head">Subjects</div>
								<div className="col-sm-7 te-content">E 401, M 201, S 501...</div>
							</div>
							<div className="d-flex flex-row no-gutters">
								<div className="col-sm-5 te-head">Email</div>
								<div className="col-sm-7 te-content">antol@yahoo.com</div>
							</div>
							<div className="d-flex flex-row no-gutters">
								<div className="col-sm-5 te-head">Contact Number</div>
								<div className="col-sm-7 te-content">212-564-4253</div>
							</div>
						</div>
						<div className="col-sm-4">
						    <div className="d-flex flex-column no-gutters">
								<div className="col-sm-12 te-head">Address</div>
								<div className="col-sm-12 te-content">542 W. 27th Street, 4th Floor, New York, NY 10001</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-right">
					<button type="button" className="btn btn-link addMore-link pointer">+ Add More Teacher</button>
				</div>
			</div>
		)
	}
}

export default TeachersList;