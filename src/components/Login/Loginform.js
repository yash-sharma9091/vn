import React, { Component } from 'react';
import Logo from  '../Logo/Logo';
import './Login.css';

class Loginform extends Component {
  	render() {
    	return (
     		<div className="login-box light-sm-bg">
				 <div className="login-header">
					 <Logo />
				 </div>
				 <div className="home-copy-right">
					<div className="text-center">
						<div className="copyright-tag text-uppercase">© 2017 COPYRIGHT pencilink</div>
					</div>
				 </div>
				 <div className="login-form" >
					<div className="d-flex flex-row justify-content-center">
					 <form className="col-6">
                        <div className="form-group">
                            <label className="d-block gradient-color" htmlFor="exampleInputEmail1">Unique Account Number*</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter unique account number" />
                        </div>
                        <div className="form-group">
                            <label className="gradient-color" for="exampleInputPassword1">Password*</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>
						<div className="form-group row col-sm-12">
							<div className="form-check">
							<label className="form-check-label">
								<input className="form-check-input" type="checkbox" /> Remember me
							</label>
						</div>
						</div>
						<button type="button" className="btn btn-block btn-primary">Login</button>
						<div className="d-flex flex-row justify-content-center p-2">
							<button type="button" className="btn btn-link forgot-link pointer">Forgot Password?</button>
						</div>
						<div className="d-flex flex-row justify-content-center">
							<div className="tags-line p-2">Become a Pilot School.</div>
							<div><button type="button" className="btn btn-link click-link pointer">Click Here</button></div>
						</div>
					</form>
				   </div>
				 </div>
			</div>
    	);
  	}
}

export default Loginform;