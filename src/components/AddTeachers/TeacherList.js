import React, {Component} from 'react';
import './AddTeachers.css';
import {Http} from '../../lib/Http';
import {connect} from 'react-redux';
import TeachersListElements from './TeachersListElements';
import norecordImg from '../../assets/images/no-record.png';
import {Loader} from '../Common/Loader';

class TeacherList extends Component {
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
            this.list();
        }
    }
	render() {
        const { teacherList, paging, dropdownToggle, isLoadingList } = this.state;
        const {refreshTeacherList} = this.props;
        /*console.log(teacherList);
        console.log(paging);*/
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="no-records-available d-flex justify-content-center align-items-center">
                            <div className="no-records-content text-center">
                                    <img src={norecordImg} alt="" /><br />
                                    <button type="button" class="btn btn-primary">Create New</button>
                            </div>
                    </div>
                    {/* <div className="p-3 p-lg-3">
                        {isLoadingList 
                            ? <Loader/>
                            :(
                                <div className="d-flex justify-content-left flex-wrap align-items-stretch align-content-around teachers-row">
                                    {teacherList.length > 0 && teacherList.map((value, index) => {
                                        return (<TeachersListElements refreshTeacherList={refreshTeacherList} teacher={value} key={index} dataIndex={index + 1} dropdownToggle={dropdownToggle === (index + 1)} toggle={this.toggle}/>)
                                    })}
                                </div>
                            )
                        }    
                    </div> */}
                </div>
            </div>
		) 
	}
}

const mapStateToProps = (state) => ({
    user: state.auth.user
})
export default connect(mapStateToProps)(TeacherList);