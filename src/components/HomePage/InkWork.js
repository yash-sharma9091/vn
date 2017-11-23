import React, { Component } from 'react';
import './HomePage.css';
import workVideoImg from '../../assets/images/video.png';
import workVideoImgIcon from '../../assets/images/video-icon.png';

class InkWork extends Component {
    constructor() {
        super();
        this.state = {
            showVideo: false,
            src:"",
            tmpSrc:""
        }
    }
    componentWillReceiveProps() {
        const {how_pencilink_works} = this.props;
        if(how_pencilink_works) {
            this.setState({tmpSrc: how_pencilink_works.video_url});    
        }
    }
  	render() {
        const {showVideo, src} = this.state;
    	return (
			<div className="light-md-bg padding-40">
                <div className="container">
				    <div className="gradient-color text-center md-heading">How Pencil Ink Works</div>
                    <div className="row justify-content-center">
                        <div className="col-sm-8 mt-4">
							<div className="vedio-main relative">
								<img className={showVideo ? "d-none img-block" : "img-block"} src={workVideoImg} alt="playButton" />
								<a onClick={() => this.showVideo()} className={showVideo ? "d-none vedio-icon" : "vedio-icon"}><img src={workVideoImgIcon} alt="videDummyImage" /></a>
                                <iframe title="How it works" src={src} frameBorder="0" allowFullScreen />
							</div>
                        </div>
                    </div>
                </div>
			</div>
    	);
  	}
    showVideo() {
        this.setState({showVideo: true, src: `https://www.youtube.com/embed/${this.state.tmpSrc}?autoplay=1`});
    }
}

export default InkWork;