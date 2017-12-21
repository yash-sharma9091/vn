/* global _ */
import React, {Component} from 'react';
import { FormGroup, Label } from 'reactstrap';
import ProgressiveImage from '../Common/ProgressiveImage';

class ViewParentInfo extends Component {
	render() {
        const {parent} = this.props;
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="teacher-profile-boxes">
                        <div className="p-3">
                                <div className="form-row">
                                    <div className="col-sm-12">
                                        <div className="profiles-mains">
                                            <ProgressiveImage className="teacher-profiles" backgroundSrc={parent.profile_image.path} />
                                            <div className="teacher-content-box">
                                                <span className="text-capitalize">{parent.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="group-tehead">Personal Information</div>
                            <div className="p-3">
                                <div className="form-row">
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Relation</Label>
                                        <span className="col-sm-9 col-md-8 word-text">{_.capitalize(parent.relation.name)}</span>
                                    </FormGroup>
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Contact Number</Label>
                                        <span className="col-sm-9 col-md-8 word-text">{parent.contact_telephoneno}</span>
                                    </FormGroup>
                                </div>

                                <div className="form-row">
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Parent Address</Label>
                                        <span className="col-sm-9 col-md-8 word-text">{parent.parent_address}</span>
                                    </FormGroup>
                                    <FormGroup className="col-sm-6">
                                        <Label className="col-sm-3 col-md-4">Email Address</Label>
                                        <span className="col-sm-9 col-md-8 word-text email-text">{parent.email_address}</span>
                                     </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		) 
	}
}

export default ViewParentInfo;