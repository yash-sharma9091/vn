import React, { Component } from 'react';
import Logo from  '../Logo/Logo';
import './Change.css';

class Changeform extends Component {
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
						<h3 className="gradient-color text-center">Change Password</h3>
						<p className="text-center light-gray">Enter a new password for this account</p>
                        <div className="form-group">
                            <label className="d-block gradient-color" htmlFor="exampleInputEmail1">Old Password</label>
                            <input type="password" className="form-control" aria-describedby="emailHelp" placeholder="**********" />
                        </div>
                        <div className="form-group">
                            <label className="gradient-color" for="exampleInputPassword1">New Password</label>
                            <input type="password" className="form-control" placeholder="**********" />
                        </div>
						<div className="form-group">
                            <label className="gradient-color" for="exampleInputPassword1">Confirm New Password</label>
                            <input type="password" className="form-control" placeholder="**********" />
                        </div>
						<button type="button" className="btn btn-block btn-primary">Save</button>
						<div className="d-flex flex-row justify-content-center p-2">
							<button type="button" className="btn btn-link forgot-link pointer">Cancel</button>
						</div>
					</form>
				   </div>
				 </div>
			</div>
    	);
  	}
}

export default Changeform;