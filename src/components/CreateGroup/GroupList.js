import React, {Component} from 'react';
import './CreateGroup.css';
import {Http} from '../../lib/Http';
import {connect} from 'react-redux';
import {Loader} from '../Common/Loader';
import NoList from '../Common/NoList';
import { Table } from 'reactstrap';
import tableicon1 from '../../assets/images/table_icon_1.png';
import tableicon2 from '../../assets/images/table_icon_2.png';

class GroupList extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            teacherList: [],
            paging:{},
            errorList: '',
            isLoadingList: false,
            dropdownToggle: 0
        };
    }
    componentDidMount() {
        this.list();
    }
    list() {
        this.setState({isLoadingList: true});
        const {user} = this.props;
        Http.get(`getteacher?_id=${user._id}&page=1`)
        .then(({data, paging}) => this.setState({teacherList: data, paging, isLoadingList: false}))
        .catch(({errors}) => this.setState({errorList: errors.message, isLoadingList: false}));    
    }
    toggle(e) {
        
        let index = e.target.dataset.index;
        //this.setState({dropdownToggle: !this.state.dropdownToggle });
        this.setState({ dropdownToggle: this.state.dropdownToggle === Number(index) ? 0 : Number(index) });
    }
    componentWillReceiveProps(newProps) {
        if( newProps.refresh ) {
            console.log('List refresh');
            this.list();
        }
    }
	render() {
        const { teacherList, dropdownToggle, isLoadingList } = this.state;
        const {refreshList, open, toggle} = this.props;
        /*console.log(teacherList);
        console.log(paging);*/
		return (
            <div className="left-group">
                <div className="left-group-content">
                    {isLoadingList 
                        ? <Loader/>
                        :(teacherList.length > 0 
                            ? (
                                <div className="p-3 p-lg-3">
                                    <div className="d-flex justify-content-left flex-wrap align-items-stretch align-content-around">
                                    <Table striped className="student-table-list">
                                        <thead>
                                            <tr>
                                                <th>Group</th>
                                                <th>No. of Students</th>
                                                <th>Class &amp; Code</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="table-icon"><img src={tableicon1} alt="tableicon1" /></div>
                                                Special Student
                                            </td>
                                            <td>50</td>
                                            <td>Vii &amp; A</td>
                                            <td>Active</td>
                                            <td>
                                                <a className="views-btn mr-3">View</a>
                                                <a className="edit-btn mr-3">Edit</a>
                                                <a className="delete-btn">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="table-icon"><img src={tableicon2} alt="tableicon2" /></div>
                                                Special Student
                                            </td>
                                            <td>50</td>
                                            <td>Vii &amp; A</td>
                                            <td>Inactive</td>
                                            <td>
                                                <a className="views-btn mr-3">View</a>
                                                <a className="edit-btn mr-3">Edit</a>
                                                <a className="delete-btn">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="table-icon"><img src={tableicon1} alt="tableicon1" /></div>
                                                Special Student</td>
                                            <td>50</td>
                                            <td>Vii &amp; A</td>
                                            <td>Active</td>
                                            <td>
                                                <a className="views-btn mr-3">View</a>
                                                <a className="edit-btn mr-3">Edit</a>
                                                <a className="delete-btn">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="table-icon"><img src={tableicon2} alt="tableicon2" /></div>
                                                Special Student</td>
                                            <td>50</td>
                                            <td>Vii &amp; A</td>
                                            <td>Active</td>
                                            <td>
                                                <a className="views-btn mr-3">View</a>
                                                <a className="edit-btn mr-3">Edit</a>
                                                <a className="delete-btn">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="table-icon"><img src={tableicon1} alt="tableicon1" /></div>
                                                Special Student
                                            </td>
                                            <td>50</td>
                                            <td>Vii &amp; A</td>
                                            <td>Active</td>
                                            <td>
                                                <a className="views-btn mr-3">View</a>
                                                <a className="edit-btn mr-3">Edit</a>
                                                <a className="delete-btn">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="table-icon"><img src={tableicon2} alt="tableicon2" /></div>
                                                Special Student
                                            </td>
                                            <td>50</td>
                                            <td>Vii &amp; A</td>
                                            <td>Inactive</td>
                                            <td>
                                                <a className="views-btn mr-3">View</a>
                                                <a className="edit-btn mr-3">Edit</a>
                                                <a className="delete-btn">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="table-icon"><img src={tableicon1} alt="tableicon1" /></div>
                                                Special Student</td>
                                            <td>50</td>
                                            <td>Vii &amp; A</td>
                                            <td>Active</td>
                                            <td>
                                                <a className="views-btn mr-3">View</a>
                                                <a className="edit-btn mr-3">Edit</a>
                                                <a className="delete-btn">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="table-icon"><img src={tableicon2} alt="tableicon2" /></div>
                                                Special Student</td>
                                            <td>50</td>
                                            <td>Vii &amp; A</td>
                                            <td>Active</td>
                                            <td>
                                                <a className="views-btn mr-3">View</a>
                                                <a className="edit-btn mr-3">Edit</a>
                                                <a className="delete-btn">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="table-icon"><img src={tableicon1} alt="tableicon1" /></div>
                                                Special Student
                                            </td>
                                            <td>50</td>
                                            <td>Vii &amp; A</td>
                                            <td>Active</td>
                                            <td>
                                                <a className="views-btn mr-3">View</a>
                                                <a className="edit-btn mr-3">Edit</a>
                                                <a className="delete-btn">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="table-icon"><img src={tableicon2} alt="tableicon2" /></div>
                                                Special Student
                                            </td>
                                            <td>50</td>
                                            <td>Vii &amp; A</td>
                                            <td>Inactive</td>
                                            <td>
                                                <a className="views-btn mr-3">View</a>
                                                <a className="edit-btn mr-3">Edit</a>
                                                <a className="delete-btn">Delete</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    </div>
                                </div>    
                            ) 
                            : (<NoList open={open} toggle={toggle} text="Add Teacher" />)
                        )
                    }
                </div>
            </div>
		) 
	}
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})
export default connect(mapStateToProps)(GroupList);