/* global _ */
import React, { Component } from 'react';
import WorkImg from '../../assets/images/work-1.png';
import './HomePage.css';
import {Loader} from '../Common/Loader';
import {limitTo} from '../../lib/Helper';
import {Link} from 'react-router-dom';

class WhatWeDo extends Component {
  	render() {
        const {what_we_do_steps} = this.props;
    	return (
	       <div className="light-md-bg padding-40">
                <div className="container">
                    <div className="gradient-color text-center md-heading">Here's What We Do For You!</div>
                    {
                        _.isEmpty(what_we_do_steps)
                        ? <Loader/> 
                        : (
                            <div className="d-flex justify-content-between mt-4 align-items-stretch whatweDo">
                                {what_we_do_steps.map((val, index) => {
                                    return (
                                        <div key={index} className="md-whiteframe-1dp p-3 light-white-bg mr-3 col-3">
                                            <div className="mb-2"><img src={WorkImg} alt= "" /></div>
                                            <div className="gradient-color heading mb-2">{val.title}</div>
                                            <p className="para">{limitTo(val.short_description, 160)}</p>
                                            {/*<Link to={val.slug} className="see-more-link gradient-color">See More</Link>*/}
                                            <Link to={''} className="see-more-link gradient-color">See More</Link>
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