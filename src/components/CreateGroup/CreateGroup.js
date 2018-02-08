import React, {Component} from 'react';
import searcher from '../../assets/images/svg/musica-searcher.svg';
import filter from '../../assets/images/svg/filter.svg';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import GroupList from './GroupList';
import CreateGroupRight from './CreateGroupRight';
import './CreateGroup.css';
import URLSearchParams from 'url-search-params';

class AddTeachers extends Component {
    constructor() {
        super();
        this.refresh = this.refresh.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            toggleClass: false,
            toggleFilter: true,
            refreshGroupList: false
        }
    }
    componentDidMount() {
        const {location} = this.props;
        if( location ) { 
            let isToogle = new URLSearchParams(location.search).get('toggleClass');
            if( isToogle === 'active' ) {
                this.setState({toggleClass: true});
            }
        }    
    }
    toggleFilter() {
        this.setState({toggleFilter: !this.state.toggleFilter});
    }
    toggle() {
        this.setState({toggleClass: !this.state.toggleClass});
    }
    refresh() {
        this.setState({refreshGroupList: true});
    }
	render() {
        const {toggleClass, refreshGroupList, toggleFilter} = this.state;
		return (
            <div>

                {/*dashboard-part*/}
                <div className="dashboard-part">

                    <div className="dashboard-search-part">

                        {/*Search-Bar*/}
                        <div className="search-bar">
                            <div className="d-flex justify-content-between p-2 no-gutters">
                                <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                                    <div className="d-flex justify-content-start">
                                        <div className="search-head">Teachers</div>
                                    </div>

                                </div>

                                <div className="col-5 col-md-5 col-lg-6 col-xl-6">
                                    <div className="d-flex justify-content-center">
                                        <div className="input-group mr-2">
                                            <input type="text" className="form-control" placeholder="Search by name, email, phone number" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span className="input-group-addon" id="basic-addon2"><img className="filter-icon" src={searcher} alt="" /></span>
                                        </div>
                                        <button type="button" className="btn btn-secondary filter-btn" onClick={this.toggleFilter}>
                                            <img className="filter-icon" src={filter} alt="" />
                                        </button>
                                    </div>

                                </div>

                                <div className="col-4 col-md-4 col-lg-3 col-xl-3">
                                    <div className="imports-button d-flex justify-content-end">
                                        <button type="button" onClick={this.toggle} className="btn btn-primary ml-1 ml-lg-1 ml-xl-2">{toggleClass ? 'Cancel': 'Create'}</button>
                                        <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Import</button>
                                        <button type="button" className="btn btn-info ml-1 ml-lg-1 ml-xl-2">Export</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/*Grade-Bar*/}
                        <div className={`grade-bar light-lg-bg ${toggleFilter ? 'd-none':''}`}>
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

                    <div className={(toggleClass && !toggleFilter) ? "dashboard-main active toggleFilter" : (toggleClass ? "dashboard-main active": ((!toggleFilter) ? "dashboard-main toggleFilter" : "dashboard-main"))}>
                            <div className="dash-left-box">
                                <GroupList refresh={refreshGroupList} refreshGroupList={this.refresh}/>
                            </div>
                            <div className="dash-right-box">
                                <CreateGroupRight toggleForm={this.toggle} refreshGroupList={this.refresh}/>
                            </div>
                    </div>
                
                </div>

            </div>
		) 
	}
}

export default AddTeachers;