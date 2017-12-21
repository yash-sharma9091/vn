import React, { Component } from 'react';
import ThankYouForm from  './ThankYouForm';
import Logo from  '../Logo/Logo';
import './ThankYou.css';
import {loadImage} from '../../lib/Helper';
import thankYouBg from '../../assets/images/thanku-bg.png';

class ThankYou extends Component {
    constructor() {
        super();
        this.state = {
            bannerImg: {}
        }
    }
    componentDidMount()  {
        loadImage(thankYouBg)
        .then(res => {
            let bannerImg = {
                backgroundImage: 'url(' + res + ')',
                transition: 'opacity 0.3s linear'
            }
            this.setState({bannerImg});
        });
        
    }
  	render() {
        const { bannerImg} = this.state;
    	return (
            <div className="thanku-panel" style={bannerImg}>
                <div className="thanku-header">
				    <Logo />
                </div>
                <div className="thanku-group">
                    <ThankYouForm />
                </div>
            </div>
    	);
  	}
}

export default ThankYou;