import React, { Component } from 'react';
import WorkImg from '../../assets/images/work-1.png';
import './HomePage.css';

class WhatWeDo extends Component {
  	render() {
    	return (
			<div className="light-md-bg padding-40">
                <div className="container">
				    <div className="gradient-color text-center md-heading">Here's What We Do For You!</div>
                    <div className="d-flex justify-content-between mt-4 align-items-stretch whatweDo">
                        <div className="md-whiteframe-1dp p-3 light-white-bg mr-3">
                                <div className="mb-2"><img src={WorkImg} /></div>
                                <div className="gradient-color heading mb-2">Lessonplan</div>
                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, quam in ornare feugiat, nisi nisi ultricies risus, ut tempor ante</p>
                                <a className="see-more-link gradient-color">See More</a>
                        </div>
                        <div className="md-whiteframe-1dp p-3 light-white-bg ml-3 mr-3">
                                <div className="mb-2"><img src={WorkImg} /></div>
                                <div className="gradient-color heading mb-2">Student Notebook</div>
                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, quam in ornare feugiat, nisi nisi ultricies risus, ut tempor ante</p>
                                <a className="see-more-link gradient-color">See More</a>
                        </div>
                        <div className="md-whiteframe-1dp p-3 light-white-bg ml-3 mr-3 ">
                                <div className="mb-2"><img src={WorkImg} /></div>
                                <div className="gradient-color heading mb-2">Assessment</div>
                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, quam in ornare feugiat, nisi nisi ultricies risus, ut tempor ante</p>
                                <a className="see-more-link gradient-color">See More</a>
                        </div>
                        <div className="md-whiteframe-1dp p-3 light-white-bg ml-3">
                                <div className="mb-2"><img src={WorkImg} /></div>
                                <div className="gradient-color heading mb-2">Gradebook</div>
                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, quam in ornare feugiat, nisi nisi ultricies risus, ut tempor ante</p>
                                <a className="see-more-link gradient-color">See More</a>
                        </div>
                    </div>
                </div>
			</div>
    	);
  	}
}

export default WhatWeDo;