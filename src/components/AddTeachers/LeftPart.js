import React, {Component} from 'react';
import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './AddTeachers.css';
import {Http} from '../../lib/Http';
import {connect} from 'react-redux';
import {DropdownWithoutActiveProps} from '../partials/DropdownWithoutActiveProps';

class LeftPart extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            teacherList: [],
            errorList: '',
            isLoadingList: false,
            dropdownOpen: false
        };
    }
    componentDidMount() {
        const {user} = this.props;
        Http.get(`getteacher?_id=${user._id}&page=2`)
        .then(({data}) => this.setState({teacherList: data, isLoadingList: false}))
        .catch(({errors}) => this.setState({errorList: errors.message, isLoadingList: false}));     
    }
    toggle() {
        this.setState({dropdownOpen: !this.state.dropdownOpen });
    }
	render() {
        const { teacherList, dropdownOpen } = this.state;
        console.log(teacherList);
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="d-flex justify-content-center flex-wrap align-items-stretch align-content-around teachers-row">
                            <div>
                                <div className="light-white-bg teacher-box p-2 p-lg-3 relative">
                                    <div className="box-settings pointer">
                                        <DropdownWithoutActiveProps tag="li" nav="true" isOpen={dropdownOpen} toggle={this.toggle}>
                                            <DropdownToggle tag="a">
                                                <div className="user-image">
                                                    <img src={ThreeDots} alt="" />
                                                </div> 
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem >Logout</DropdownItem>
                                            </DropdownMenu>
                                        </DropdownWithoutActiveProps>
                                    </div>
                                    <div className="teacher-group-box relative">
                                        <div className="teacher-picture">
                                            <img src={TeacherPic} alt="" />
                                        </div>
                                        <div className="te-head">Michael Dueri...</div>
                                        <div className="te-gen mb-1">Male</div>
                                        <div className="te-sub">Subject &amp; Class</div>
                                        <div className="te-code">E 401, M 201, S 501...</div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <button type="button" className="btn btn-link mesg-btn pointer"><img src={EnvelopeGray} alt="" /> Message</button>
                                        <button type="button" className="btn btn-link view-btn pointer">View Detail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		) 
	}
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})
export default connect(mapStateToProps)(LeftPart);