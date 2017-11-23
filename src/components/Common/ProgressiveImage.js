/* global IMAGE_PATH */
import React, { Component } from 'react';
import {loadImage} from '../../lib/Helper';

class ProgressiveImage extends Component {
	constructor() {
		super();
		this.state = {
			src: ''
		}
	}
	loadImage(src) {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.onload = () => resolve(src);
			image.onerror = err => reject(err);
			image.src = src;
		});
	}
	componentDidMount() {
		const {src, tmpSrc} = this.props;
		this.setState({src: tmpSrc});
		if ( src ) {
			let url = (IMAGE_PATH + '/' + src);
			loadImage(url)
			.then(res => this.setState({src}) )
		}
	}
  	render() {
  		const {src} = this.state;
  		const {alt, className} = this.props;
    	return (
			<img src={src} alt={alt || 'Progressive Image'}>
    	);
  	}
}

export default ProgressiveImage;