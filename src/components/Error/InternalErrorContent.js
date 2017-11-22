import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {home} from '../../lib/SiteLinks';
import './404.css';

class ErrorContent extends Component {
  	render() {
        const {errorMsg} = this.props;
    	return (
            <div className="light-sm-bg padding-40">
              <div className="container">
                <div className="d-flex justify-content-around">
                    <div className="text-center">
                        <strong className="num404">
                            <span>500</span>
                            <small>Internal server error</small>
                        </strong>
                    </div>
                    <div className="text-center">
                        <div className="error404">
                            <h2>Oops.</h2>
                            <p>{errorMsg || 'There is some error loading page right now, please try refresh your page again.'}</p>
                        </div>  
                    </div>
                </div>
              </div>
            </div>
    	);
  	}
}

export default ErrorContent;

