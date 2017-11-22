import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {home} from '../../lib/SiteLinks';
import './404.css';

class ErrorContent extends Component {
  	render() {
    	return (
            <div className="light-sm-bg padding-40">
              <div className="container">
                <div className="d-flex justify-content-around">
                    <div className="text-center">
                        <strong className="num404">
                            <span>404</span>
                            <small>Something is Wrong</small>
                        </strong>
                    </div>
                    <div className="text-center">
                        <div className="error404">
                            <h2>Oops.</h2>
                            <p>The page you are looking for was moved, removed, renamed or might never exist.</p>
                            <Link to={home} className="blueBg">Go Home</Link>
                        </div>  
                    </div>
                </div>
              </div>
            </div>
    	);
  	}
}

export default ErrorContent;

