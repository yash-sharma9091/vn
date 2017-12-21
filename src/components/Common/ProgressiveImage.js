/* global IMAGE_PATH */
import React, { Component } from 'react';
import {loadImage} from '../../lib/Helper';
//import {Loader} from './Loader';

class ProgressiveImage extends Component {
	constructor() {
		super();
		this.state = {
			loadSrc: '',
			loadBackgoundSrc:{},
			isLoading: false
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
		const {src, backgroundSrc} = this.props;
		this.setState({isLoading: true});
		let url;
		if ( src ) {
			url = (IMAGE_PATH + '/' + src);
			loadImage(url)
			.then(res => this.setState({loadSrc: src, isLoading: false}) )
			.catch(err => console.log(err));
			
		} else if( backgroundSrc ) {
			let pic = `${IMAGE_PATH}/${backgroundSrc}`;
			
			url = {
				backgroundImage: 'url(' + ( pic ) + ')',
				backgroundRepeat  : 'no-repeat',
	       		backgroundPosition: 'center',
			}
			loadImage(`${IMAGE_PATH}/${backgroundSrc}`)
			.then(res => this.setState({loadBackgoundSrc: url, isLoading: false}) )
			.catch(err => console.log(err));
		}		
	}
  	render() {
  		const {loadSrc, isLoading, loadBackgoundSrc} = this.state;
  		const {alt, className, backgroundSrc, src} = this.props;
  		if( isLoading ) {
  			return <div className={className}></div>
  		} else if( src ) {
  			return (
				<img src={loadSrc} className={className} alt={alt || 'Progressive Image'} />
    		);
  		} else if( backgroundSrc ) {
  			return (
				<div className={className} style={loadBackgoundSrc}></div>
    		);
  		} else {
  			return null;
  		}
    	
  	}
}

export default ProgressiveImage;