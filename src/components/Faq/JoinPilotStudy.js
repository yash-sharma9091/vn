/* global _ */
import React, { Component } from 'react';
import './Faq.css';
import {connect} from 'react-redux';
import NoRecords from '../Common/NoRecords';
class JoinPilotStudy extends Component {
  	render() {
  		const {settings} = this.props;
    	return (
     		<div className="light-sm-bg">
				  <div className="d-flex flex-row justify-content-center">
					 <div className="col-8 col-md-8 col-lg-5 col-xl-4">
						<h3 className="gradient-color text-center">Join Pilot Study</h3>
                        <div className="light-gray text-center mt-4">
                            { _.isEmpty(settings) ? <NoRecords/> : settings.join_pilot_study}
                        </div>
                        <div className="text-center mt-4">
							<button type="button" className="btn btn-primary btn-block">See Pilot Program Process </button>
						</div>
                     </div>
				 </div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		settings: state.settings
	}
}
export default connect(mapStateToProps)(JoinPilotStudy);