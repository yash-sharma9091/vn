import React, {Component} from 'react';
import './AddStudent.css';
import {Http} from '../../lib/Http';
import {connect} from 'react-redux';
import StudentListElements from './StudentListElements';
import {Loader} from '../Common/Loader';

class LeftPart extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            studentList: [],
            paging:{},
            errorList: '',
            isLoadingList: false,
            dropdownToggle: false
        };
    }
    componentDidMount() {
        this.list();
    }
    list() {
        this.setState({isLoadingList: true});
        const {user} = this.props;
        Http.get(`getstudent?_id=${user._id}&page=1`)
        .then(({data, paging}) => this.setState({studentList: data, paging, isLoadingList: false}))
        .catch(({errors}) => this.setState({errorList: errors.message, isLoadingList: false}));    
    }
    toggle() {
        this.setState({dropdownToggle: !this.state.dropdownToggle });
    }
    componentWillReceiveProps(newProps) {
        
        if( newProps.refresh ) {
            this.list();
        }
    }
	render() {
        const { studentList, paging, dropdownToggle, isLoadingList } = this.state;
        const {refreshList} = this.props;
        /*console.log(studentList);
        console.log(paging);*/
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        {isLoadingList 
                            ? <Loader/>
                            :(
                                <div className="d-flex justify-content-left flex-wrap align-items-stretch align-content-around teachers-row">
                                    {studentList.length > 0 && studentList.map((value, index) => {
                                        return (<StudentListElements refreshList={refreshList} student={value} key={index} dataIndex={index + 1} dropdownToggle={dropdownToggle === (index + 1)} toggle={this.toggle}/>)
                                    })}
                                </div>
                            )
                        }    
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