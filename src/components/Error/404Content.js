import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {home} from '../../lib/SiteLinks';
import errorImg from '../../assets/images/404Img.png';
import errorImgNew from '../../assets/images/505Img.png';
import './404.css';
import {LinkContainer} from 'react-router-bootstrap';
import { Button } from 'reactstrap';

class ErrorContent extends Component {
  	render() {
    	return (
            <div className="error-box-show light-sm-bg padding-40">
                <div className="container">
                    <div className="d-flex justify-content-around">
                        <div className="text-center padding-40">
                            <div className="num404">
                                <img src={errorImg} alt="" />
                            </div>
                            <div className="error404 text-left">
                                <h3>Sorry!</h3>
                                <p>The Page You’re Looking For <br/> Was Not Found</p>
                                <LinkContainer to={home}> 
                                    <Button color="primary">Go Back</Button>
                                </LinkContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    	);
  	}
}

export default ErrorContent;

