import React, { Component } from 'react';
import WorkImg from '../../assets/images/work-1.png';
import './HomePage.css';
import {Loader} from '../Common/Loader';

class WhatWeDo extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            whatWeDo: []
        }
    }
    componentWillReceiveProps() {
        const {what_we_do_steps} = this.props;
        if( what_we_do_steps ) {
            this.setState({whatWeDo: what_we_do_steps, isLoading: false});    
        }
    }
  	render() {
        const {isLoading, whatWeDo} = this.state;
    	return (
	       <div className="light-md-bg padding-40">
                <div className="container">
                    <div className="gradient-color text-center md-heading">Here's What We Do For You!</div>
                    {
                        isLoading 
                        ? <Loader/> 
                        : (
                            <div className="d-flex justify-content-between mt-4 align-items-stretch whatweDo">
                                {whatWeDo.map((val, index) => {
                                    return (
                                        <div key={index} className="md-whiteframe-1dp p-3 light-white-bg mr-3">
                                            <div className="mb-2"><img src={WorkImg} alt= "" /></div>
                                            <div className="gradient-color heading mb-2">{val.title}</div>
                                            <p className="para">{val.short_description}</p>
                                            <a className="see-more-link gradient-color">See More</a>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }
                </div>
			</div>
    	);
  	}
}

export default WhatWeDo;