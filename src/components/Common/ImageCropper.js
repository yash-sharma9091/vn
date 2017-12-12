/* global _ */
import React, {Component} from 'react';
import CameraImage from '../../assets/images/photo-camera.png';
import DeleteImage from '../../assets/images/svg/delete-button.svg';
import EditImage from '../../assets/images/svg/edit.svg';
import ImageModal from '../Common/ImageModal';

class ImaegCropper extends Component {
	constructor() {
		super();
		this.onChange = this.onChange.bind(this);
      	this.toggleModal = this.toggleModal.bind(this);
      	this.getDataUrl = this.getDataUrl.bind(this);
      	this.removeImage = this.removeImage.bind(this);
      	this.state = {
      		tmpSrc: '',
      		src: '',
      		invalidFile:false,
      		invalidSize:false,
      		showImage: false,
      	}
	}
	toggleModal() {
    	this.setState({showImage: false});
    }
	onChange(e) {
	    let files;
	    if (e.dataTransfer) {
	      	files = e.dataTransfer.files;
	    } else if (e.target) {
	      	files = e.target.files;
	    }
	    if(files.length === 0) {
	    	return;
	    }
	    if(files[0].size > 5242880) {
	    	this.setState({ invalidSize: true });
	    } else if(!['image/jpeg','image/jpg','image/png','image/gif'].includes(files[0].type)) {
	    	this.setState({ invalidFile: true });
	    } else {
	    	this.setState({ invalidFile: false, invalidSize: false });	
	    	const reader = new FileReader();
	    	reader.onload = (e) => {
	    		this.setState({ tmpSrc: reader.result, showImage: true});	
	    	};
	    	reader.readAsDataURL(files[0]);	
	    }
    }
    getDataUrl(data) {
    	const { input: { onChange } } = this.props;
    	const {blob, dataUrl} = data;
    	const reader = new FileReader();
	    reader.onload = () => {
	      	this.setState({ src: reader.result, showImage: false});
	    };
	    
	    reader.readAsDataURL(blob);
	    onChange(blob);
    }
    componentWillReceiveProps(newProps) {
        if(newProps.reset) {
        	this.removeImage();
        }
    }
    removeImage() {
    	this.setState({src: ''});
    	if( _.isFunction(this.props.removeImage) ) {
    		this.props.removeImage();
		}
    	
    	const { input: { onChange } } = this.props;
    	onChange(null);
    }
	render() {
		const {logo, displayText} = this.props;
		const {src, tmpSrc, showImage, invalidFile, invalidSize} = this.state;
		return (
			<div>
				<div className="form-group">
				    <div className={`camera-image ${invalidSize ? 'invalidFile':''}`}>
				        <div className="camera-icon">
				            {/* <img src={src || logo || CameraImage} /> */}
				        </div>
				        <a className="delete-button-image" onClick={this.removeImage}><img src={DeleteImage} /></a>
				        <a className="edit-button-image"><img src={EditImage} />
				            <input type="file" onChange={this.onChange} className="form-control-file" id="upload-photo" />
				        </a>
				    </div>
				    <div className="camera-upload-content">
				        <h3 className="text-uppercase">{displayText || 'Upload photo'}</h3>
				        <span className={invalidSize ? "invalidText" : ""}>maximum image size 5 mb.</span>
				        {invalidFile && <span className="invalidText">upload image of type jpg, jpeg, png or gif</span>}
				    </div>
				</div>
				<ImageModal open={showImage} src={tmpSrc} toggle={this.toggleModal} setDataUrl={this.getDataUrl}/>
			</div>
		)
	}
}

export default ImaegCropper;