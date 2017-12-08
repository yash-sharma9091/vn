import React, {Component} from 'react';
import searcher from '../../assets/images/svg/musica-searcher.svg';
import filter from '../../assets/images/svg/filter.svg';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import TeacherList from './LeftPart';
import CreateTeacher from './RightPart';
import './EditTeacherDetail.css';

class AddTeachers extends Component {
    constructor() {
        super();
        this.state = {
            toggleClass: false
        }
    }
    toggle() {
        this.setState({toggleClass: !this.state.toggleClass})
    }
	render() {
        const {toggleClass} = this.state;
		return (
            <div>

                {/*dashboard-part*/}
                <div className="dashboard-part">

                    <div className="dashboard-search-part">

                        {/*Search-Bar*/}
                        <div className="search-bar">
                            <div className="d-flex justify-content-between p-2 no-gutters">
                                <div className="col-5 col-md-5 col-lg-4 col-xl-4">
                                    <div className="d-flex justify-content-start">
                                        <div className="breadcrumb-list">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><a href="#">Teachers</a></li>
                                                <li class="breadcrumb-item"><a href="#">Antoine Langlais</a></li>
                                                <li class="breadcrumb-item active" aria-current="page">Edit</li>
                                            </ol>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-7 col-md-7 col-lg-8 col-xl-8">
                                    <div className="imports-button d-flex justify-content-end">
                                        <button type="button" onClick={() => this.toggle()} className="btn btn-primary ml-1 ml-lg-1 ml-xl-2">{toggleClass ? 'Cancel': 'Create'}</button>
                                        <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Update</button>
                                        <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Cancel</button>
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
                        
                    </div>

                    {/*Dashboard-Main*/}

                    <div className={toggleClass ? "dashboard-main active":"dashboard-main"}>
                            <div className="dash-left-box">
                                <TeacherList />
                            </div>
                            <div className="dash-right-box">
                                <CreateTeacher />
                            </div>
                    </div>
                
                </div>

            </div>
		) 
	}
}

export default AddTeachers;