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

                    <div className="dashboard-search-part inner-sub-page">

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
                                        <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Update</button>
                                        <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Dashboard-Main*/}

                    <div className="dashboard-main inner-sub-page">
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