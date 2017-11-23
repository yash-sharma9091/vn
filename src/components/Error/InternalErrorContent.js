import React, { Component } from 'react';
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
                            <small>{errorMsg || 'Internal server error'}</small>
                        </strong>
                    </div>
                    <div className="text-center">
                        <div className="error404">
                            <h2>Oops.</h2>
                            <p>The server encountered an internal error and was unable to compelete your request</p>
                            
                        </div>  
                    </div>
                </div>
              </div>
            </div>
    	);
  	}
}

export default ErrorContent;

