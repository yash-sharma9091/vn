import React, { Component } from 'react';
import './Faq.css';
import {connect} from 'react-redux'  
class JoinPilotStudy extends Component {
  	render() {
  		const {settings} = this.props;
    	return (
     		<div className="light-sm-bg">
				  <div className="d-flex flex-row justify-content-center">
					 <div className="col-4">
						<h3 className="gradient-color text-center">Join Pilot Study</h3>
						<p className="text-center light-gray">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <div className="light-gray text-center mt-4">
                            {settings.join_pilot_study}
                        </div>
                        <div className="text-center mt-4">
							<button type="button" className="btn btn-primary btn-block">How Can My School Become A Pilot School ?</button>
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