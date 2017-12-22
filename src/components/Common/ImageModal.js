import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class ImageModal extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	isCropping: false
	    };
	    this.cropImage = this.cropImage.bind(this);
	    this.onExit = this.onExit.bind(this);
	}
	onExit() {
		this.setState({isCropping: false})
	}
	cropImage() {
		const {setDataUrl} = this.props;
    	if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      		return;
		}
		this.setState({isCropping: true})
		if (!HTMLCanvasElement.prototype.toBlob) {
			Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
				value: function (callback, type, quality) {
				var canvas = this;
				setTimeout(function() {

					var binStr = atob( canvas.toDataURL(type, quality).split(',')[1] ),
						len = binStr.length,
						arr = new Uint8Array(len);

					for (var i = 0; i < len; i++ ) {
					arr[i] = binStr.charCodeAt(i);
					}

					callback( new Blob( [arr], {type: type || 'image/png'} ) );

				});
				}
			});
		}
    	this.cropper.getCroppedCanvas().toBlob(  (blob) => setDataUrl({blob})  );
    	//this.setState({cropResult: this.cropper.getCroppedCanvas().toDataURL()});
  	}
  	render() {
  		const {open, toggle, src} = this.props;
  		const {isCropping} = this.state;
	    return (
	        <Modal isOpen={open} toggle={toggle} className={this.props.className} onClosed={this.onExit} backdrop="static">
	          	<ModalHeader toggle={toggle}>Crop Image</ModalHeader>
	          	<ModalBody>
	            	<Cropper
	                    style={{ height: 350, width: '100%' }}
	                    aspectRatio={16 / 9}
	                    autoCropArea={0.5}
	                    guides={false}
	                    src={src}
	                    minCanvasWidth={50}
	                    minCanvasHeight={50}
	                    viewMode={1}
	                    ref={cropper => { this.cropper = cropper; }}
                  	/>
	          	</ModalBody>
	          	<ModalFooter>
		            <Button color="primary" onClick={this.cropImage} disabled={isCropping}>{isCropping ? 'Cropping ...' :'Crop'}</Button>{' '}
	            	<Button color="secondary" onClick={toggle}>Cancel</Button>
	          	</ModalFooter>
	        </Modal>
	    );
  	}
}

export default ImageModal;