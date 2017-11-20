import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {forgotPassword} from '../../lib/SiteLinks';
import './404.css';

class InvalidContent extends Component {
  	render() {
        console.log('invalid conte');
    	return (
            <div className="light-sm-bg padding-40">
              <div className="container">
                <div className="d-flex justify-content-around">
                    <div className="text-center">
                        <strong className="num404">
                            <span>304</span>
                            <small>Expired or invalid link</small>
                        </strong>

                    </div>
                    <div className="text-center">
                        <div className="error404">
                            <h2>Oops.</h2>
                            <p>The link you are trying to access is either invalid or has been expired. please click below to reset your password</p>
                            <Link to={forgotPassword} className="blueBg">Reset Password</Link>
                        </div>  
                    </div>
                </div>
              </div>
            </div>
    	);
  	}
}

export default InvalidContent;

