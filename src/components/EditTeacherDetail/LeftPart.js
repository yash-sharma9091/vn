import React, {Component} from 'react';
import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './EditTeacherDetail.css';

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
                        <div className="edit-group-box">
                        <div className="p-3">
                                <Form>
                                    <div className="form-row">
                                        <div className="col-sm-2">
                                            dsa
                                        </div>
                                        <div className="col-sm-10">
                                            <Form className="form-row">
                                                <FormGroup className="mr-2">
                                                    <Label>First Name</Label>
                                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter first name" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Last Name</Label>
                                                    <Input type="password" placeholder="Enter last name " />
                                                </FormGroup>
                                            </Form>
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
                                                <Label for="exampleSelect" className="col-sm-3">Gender</Label>
                                                <Input type="select" name="select" id="exampleSelect" className="col-sm-9">
                                                <option>Select gender</option>
                                                <option>Select gender</option>
                                                <option>Select gender</option>
                                                <option>Select gender</option>
                                            </Input>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                        <div className="form-row">
                                            <Label for="exampleSelect" className="col-sm-3">Subject</Label>
                                            <Input type="select" name="select" id="exampleSelect" className="col-sm-9">
                                            <option>Select subject</option>
                                            <option>Select subject</option>
                                            <option>Select subject</option>
                                            <option>Select subject</option>
                                        </Input>
                                        </div>
                                    </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label for="exampleSelect" className="col-sm-3">Grade</Label>
                                                <Input type="select" name="select" id="exampleSelect" className="col-sm-9">
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                            </Input>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                        <div className="form-row">
                                            <Label for="exampleSelect" className="col-sm-3">Official Grade</Label>
                                            <Input type="select" name="select" id="exampleSelect" className="col-sm-9">
                                            <option>Select grade</option>
                                            <option>Select grade</option>
                                            <option>Select grade</option>
                                            <option>Select grade</option>
                                        </Input>
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
                                            <div className="form-row form-group">
                                                <Label for="exampleSelect" className="col-sm-3">Address</Label>
                                                <input type="text" class="form-control" placeholder="Enter address" />
                                            </div>
                                            <div className="form-row form-group">
                                                <Label for="exampleSelect" className="col-sm-3"></Label>
                                                <input type="text" class="form-control" placeholder="Enter country" />
                                            </div>
                                            <div className="form-row form-group">
                                                <Label for="exampleSelect" className="col-sm-3"></Label>
                                                <Input type="select" name="select" id="exampleSelect" className="col-sm-9">
                                                <option>Select state</option>
                                                <option>Select state</option>
                                                <option>Select state</option>
                                                <option>Select state</option>
                                            </Input>
                                            </div>
                                            <div className="form-row form-group">
                                                <Label for="exampleSelect" className="col-sm-3"></Label>
                                                <input type="text" class="form-control" placeholder="Enter city" />
                                            </div>
                                        </FormGroup>

                                        <FormGroup className="col-sm-6">
                                            <div className="form-row form-group">
                                                <Label for="exampleSelect" className="col-sm-3">Email</Label>
                                                <input type="text" class="form-control" placeholder="Enter email" />
                                            </div>
                                            <div className="form-row form-group">
                                                <Label for="exampleSelect" className="col-sm-3">Phone</Label>
                                                <input type="text" class="form-control" placeholder="Enter phone" />
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