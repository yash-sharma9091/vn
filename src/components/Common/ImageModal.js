import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class ImageModal extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      cropResult: null
	    };
	    this.cropImage = this.cropImage.bind(this);
	}
	cropImage() {
		const {setDataUrl} = this.props;
    	if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      		return;
    	}
    	this.cropper.getCroppedCanvas().toBlob(  (blob) => setDataUrl({blob})  );
    	//this.setState({cropResult: this.cropper.getCroppedCanvas().toDataURL()});
  	}
  	render() {
  		const {open, toggle, src} = this.props;
	    return (
	        <Modal isOpen={open} toggle={toggle} className={this.props.className}>
	          	<ModalHeader toggle={toggle}>Modal title</ModalHeader>
	          	<ModalBody>
	            	<Cropper
	                    style={{ height: 400, width: '100%' }}
	                    aspectRatio={16 / 9}
	                    autoCropArea={0.5}
	                    preview=".img-preview"
	                    guides={false}
	                    src={src}
	                    ref={cropper => { this.cropper = cropper; }}
                  	/>
	          	</ModalBody>
	          	<ModalFooter>
		            <Button color="primary" onClick={this.cropImage}>Crop</Button>{' '}
	            	<Button color="secondary" onClick={toggle}>Cancel</Button>
	          	</ModalFooter>
	        </Modal>
	    );
  	}
}

export default ImageModal;