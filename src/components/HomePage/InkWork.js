import React, { Component } from 'react';
import './HomePage.css';
import workVideoImg from '../../assets/images/video.png';
import workVideoImgIcon from '../../assets/images/video-icon.png';

class InkWork extends Component {
  	render() {
    	return (
			<div className="light-md-bg padding-40">
                <div className="container">
				    <div className="gradient-color text-center md-heading">How Pencil Ink Works</div>
                    <div className="row justify-content-center">
                        <div className="col-sm-8 mt-4">
							<div className="relative">
								<img className="img-block" src={workVideoImg} alt="" />
								 <a className="vedio-icon"><img src={workVideoImgIcon} alt="" /></a>
							</div>
                        </div>
                    </div>
                </div>
			</div>
    	);
  	}
}

export default InkWork;