import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './TeacherDetail.css';

class LeftPart extends Component {
      constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
	render() {
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="teacher-profile-boxes">
                        <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <div className="col-sm-12">
                                            <div className="profiles-mains">
                                                <div className="teacher-profiles"></div>
                                                <span>Antoine Langlais</span>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>

                            <div className="group-tehead">Personal Information</div>
                            <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Gender</Label>
                                                <span className="col-sm-9 word-text">Male</span>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Official Class</Label>
                                                <span className="col-sm-9 word-text">E204</span>
                                            </div>
                                         </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Grade</Label>
                                                <span className="col-sm-9 word-text">E 201</span>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Subjects</Label>
                                                <span className="col-sm-9">
                                                    <ul className="code-list">
                                                        <li>E 401</li>
                                                        <li>M 201</li>
                                                        <li>S 501</li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </FormGroup>
                                    </div>
                                </Form>
                            </div>

                            <div className="group-tehead"> Contact Information</div>
                            <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Address</Label>
                                                <span className="col-sm-9 word-text">542 W. 27th Street, 4th Floor, New York, NY 10001</span>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label className="col-sm-3">Email</Label>
                                                <span className="col-sm-9 word-text email-text">antol@yahoo.com</span>
                                            </div>
                                            <div className="form-row">
                                                <Label className="col-sm-3">Phone</Label>
                                                <span className="col-sm-9 word-text">212-564-4253</span>
                                            </div>
                                         </FormGroup>
                                    </div>
                                </Form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
		) 
	}
}

export default LeftPart;