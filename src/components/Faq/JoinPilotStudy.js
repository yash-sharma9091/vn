import React, { Component } from 'react';
import './Faq.css';
    
class JoinPilotStudy extends Component {
  	render() {
    	return (
     		<div className="light-sm-bg">
				  <div className="d-flex flex-row justify-content-center">
					 <div className="col-4">
						<h3 className="gradient-color text-center">Ask a Question/Make a Comment</h3>
						<p className="text-center light-gray">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <div className="light-gray text-center mt-4">
                            Proin non metus feugiat, volutpat purus nec, mollis ligula. Maecenas nec molestie tortor. Phasellus commodo rutrum sapien in tincidunt. Nam eu mi mi. Morbi convallis, tortor et blandit tempor, nulla erat ornare lectus, sit amet imperdiet odio nunc et augue.
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

export default JoinPilotStudy;