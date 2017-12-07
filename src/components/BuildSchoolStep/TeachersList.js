/* global IMAGE_PATH */
import React, {Component} from 'react';
import teacherImage from '../../assets/images/teacher.png';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import {Loader} from '../Common/Loader';
import {getAddress} from '../../lib/Helper';

class TeachersList extends Component {
	constructor() {
		super();
		this.state = {
			isLoadingList: false,
			teacherList:[],
			errorList:''
		}
	}
	componentDidMount() {
		this.list();
	}
	list() {
		this.setState({ isLoadingList: true });
		const {user} = this.props;
		Http.get(`getteacher?_id=${user._id}&limit=5`)
		.then(({data}) => this.setState({teacherList: data, isLoadingList: false}))
		.catch(({errors}) => this.setState({errorList: errors.message, isLoadingList: false}));		
	}
	componentWillReceiveProps(newProps) {
		if(newProps.reload) {
			this.list();
		}
	}
	render() {
		const {errorList, isLoadingList, teacherList} = this.state;

		return (
			<div className="mb-4">
				{errorList && <Alert alertVisible={errorList} alertMsg={errorList} className={errorList ? "danger":"success"}/>}
				{isLoadingList 
					? <Loader/> 
					: (	teacherList.length > 0 ?
						teacherList.map((value, index) => {
						return (
							<div key={index} className={`teacher-details ${index !== 0 ? 'mt-4':''}`}>
								<div className="d-flex flex-row pt-3 pb-3">
								<div className="col-sm-4 border-right">
								    <div className="d-flex flex-row no-gutters">
										<div className="col-sm-3">
											<div className="te-img">
												<img src={`${IMAGE_PATH}/${value.profile_image.path}`} alt={`${value.first_name} ${value.last_name}`} />
											</div>
										</div>
										<div className="col-sm-9">
										    <div className="te-name text-capitalize">{`${value.first_name} ${value.last_name}`}</div>
											<div className="te-gender text-capitalize">{value.gender}</div>
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
										<div className="col-sm-7 te-content">{value.email_address}</div>
									</div>
									<div className="d-flex flex-row no-gutters">
										<div className="col-sm-5 te-head">Contact Number</div>
										<div className="col-sm-7 te-content">{value.contact_telephoneno}</div>
									</div>
								</div>
								<div className="col-sm-4">
								    <div className="d-flex flex-column no-gutters">
										<div className="col-sm-12 te-head">Address</div>
										<div className="col-sm-12 te-content">{getAddress(value.address)}</div>
									</div>
								</div>
								</div>
							</div>
						)}):null
					)
				}	
				{/*<div className="text-right">
					<button type="button" className="btn btn-link addMore-link pointer">+ Add More Teacher</button>
				</div>*/}
			</div>
		)
	}
}

export default TeachersList;

