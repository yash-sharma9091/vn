/* global */
import React, { Component } from 'react';
import './ThankYou.css';

class ThankYouForm extends Component {
  	render() {
    	return (
            <div className="d-flex justify-content-center">
                <div className="thanku-modal col-4 p-4">
                    <div className="heading gradient-color">Thank You !</div>
                    <div className="para">Lorem ipsum dolor sit amet, consectetur Proin non metus feugiat, volutpat purus nec, mollis Maecenas nec molestie tortor.</div>
                    <div className="tag gradient-color">The Pencil's Ink team will contact you shortly.</div>
                    <button type="button" class="btn btn-block gradient-button">See Pilot Program Process</button>
                </div>
            </div>
    	);
  	}
}

export default ThankYouForm;