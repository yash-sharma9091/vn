import React, {Component} from 'react';
import searcher from '../../assets/images/svg/musica-searcher.svg';
import filter from '../../assets/images/svg/filter.svg';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
import './AddTeachers.css';

class AddTeachers extends Component {
	render() {
		return (
            <div>

                <div className="dashboard-part">
                    {/*Search-Bar*/}
                    <div className="search-bar">
                        <div className="d-flex justify-content-between p-2 no-gutters">
                            <div className="col-3 col-lg-2 col-xl-2">
                                <div className="d-flex justify-content-start">
                                    <div className="search-head">Teachers</div>
                                </div>
                            </div>


                            <div className="col-6 col-lg-8 col-xl-8">
                                <div className="d-flex justify-content-center">
                                    <div className="input-group mr-2">
                                        <input type="text" className="form-control" placeholder="Search by name, email, phone number" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span className="input-group-addon" id="basic-addon2"><img className="filter-icon" src={searcher} alt="" /></span>
                                    </div>
                                    <button type="button" className="btn btn-secondary filter-btn"><img className="filter-icon" src={filter} alt="" /></button>
                                </div>
                            </div>


                            <div className="col-3 col-lg-2 col-xl-2">
                                <div className="imports-button d-flex justify-content-end">
                                    <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Import</button>
                                    <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Export</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Grade-Bar*/}
                    <div className="grade-bar light-lg-bg" >
                        <div className="d-flex justify-content-between align-items-center p-2 grade-box">
                            <div>
                                <FormGroup className="mb-0 mr-2">
                                    <Input type="select" name="Grades" id="exampleSelect">
                                        <option>Grades</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                    </Input>
                                </FormGroup>
                            </div>
                            <div>
                                <FormGroup className="mb-0 mr-2">
                                    <Input type="select" name="Grades" id="exampleSelect">
                                        <option>Subjects</option>
                                        <option>English</option>
                                        <option>Hindi</option>
                                        <option>Maths</option>
                                        <option>Science</option>
                                        <option>Physics</option>
                                    </Input>
                                </FormGroup>
                            </div>
                            <div>
                                <FormGroup className="mb-0 mr-2">
                                    <Input type="select" name="Grades" id="exampleSelect">
                                        <option>Official Grade</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className="col-1 pl-0 pr-0 pl-lg-1 pr-lg-1">
                                <a className="clear-link">X Clear</a>
                            </div>
                        </div>
                    </div>

                    {/*Dashboard-Main*/}
                    <div className="dashboard-main">
                        <div className="d-flex justify-content-between">
                            <div>
                                <LeftPart />
                            </div>
                            <div>
                                <RightPart />
                            </div>
                        </div>
                    </div>
                
                </div>

            </div>
		) 
	}
}

export default AddTeachers;