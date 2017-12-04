/* global IMAGE_PATH */
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import pdfImage from '../../assets/images/svg/pdf.svg';
import questionImage from '../../assets/images/svg/questions.svg';
import downloadImage from '../../assets/images/svg/download.svg';
import uploadImage from '../../assets/images/svg/upload.svg';
import './SchoolStep.css';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import {connect} from 'react-redux';

class SchoolBulkUpload extends Component {
    constructor() {
        super();
        this.state = {
            isUploading: false,
            error: '',
            success: ''
        }
    }
    handleOnChange(e) {  
        const {user}  = this.props;
        let formData = {
            image: e.target.files[0],
            _id: user._id
        };
        this.setState({isUploading: true});
        Http.upload('addbulkteacher_csv', formData)
        .then(({data}) => this.setState({success: data.message}))
        .catch(({errors}) => this.setState({isUploading: true, error: errors.message}))
        .then(() => {
            setTimeout(() => this.setState({ error: '', success: '' }),5000) ;
            //console.log(e.target);
        });
    }
  	render() {
        const {error, success} = this.state;
    	return (
            <div className="bulk-upload">
                <div className="d-flex justify-content-center pt-3 pb-3 no-gutters">
                    <div className="col-sm-8">
                        <Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>
                        <div className="text-center download-CSV">
                            <a href={`${IMAGE_PATH}/assets/teacher_uploadedcsv/SampleCSV.csv`} className="btn btn-info mr-1 width-200 relative">Download CSV File Format
                                <span className="downloadImg"><img src={downloadImage} alt="download sample csv" /></span>
                            </a>
                        </div>
                        <div className="para text-center pt-4 pb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero aliquet, mollis odio feugiat, volutpat eros. Sed bibendum turpis sed dignissim iaculis. Vivamus eros nulla, vestibulum id eros quis, vestibulum pharetra metus. Nullam sed luctus mauris. Nam sed felis eget felis tincidunt Download Guide.
                            <button type="button" className="btn btn-link click-link pointer">Download Guide <img className="pdf-icon pl-1" src={pdfImage} alt="" /></button>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn gradient-button width-200 relative">Upload via CSV
                                <a className="uploadImg"><img src={uploadImage} alt="" /></a>
                            </button>
                            <input type="file" onChange={(e) => this.handleOnChange(e)}  />
                        </div>
                        <div className="para csv-tags text-center pt-4">
                            Browse your csv file (Only CSV and Excel files are allowed) <img className="questionMark pl-1" src={questionImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            );
        }
}
const mapStateToProps = (state) => ({
    user: state.auth.user
})
export default connect(mapStateToProps)(SchoolBulkUpload);