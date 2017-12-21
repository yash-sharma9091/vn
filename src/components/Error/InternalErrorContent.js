import React, { Component } from 'react';
import './404.css';

class ErrorContent extends Component {
  	render() {
        const {errorMsg} = this.props;
    	return (
            <div className="light-sm-bg padding-40">
              <div className="container">
              <div className="d-flex justify-content-around">
                    <div className="text-center padding-40">
                        <div className="num404">
                            <img src={errorImg} alt="" />
                        </div>
                        <div className="error404 text-left">
                            <h3>Oops.</h3>
                            <p>The server encountered an internal error and <br /> was unable to compelete your request</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
    	);
  	}
}

export default ErrorContent;

